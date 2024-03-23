import type { CommerceResponse } from "./response";

export default class RegisterCommerceService {

  async commerce(commerceData: CommerceResponse): Promise<boolean> {
    try {
      const url = import.meta.env.VITE_APP_SERVICE_URL;
      const formData = new FormData();
      formData.append('names', commerceData.names);
      formData.append('contact', commerceData.contact);
      formData.append('maill', commerceData.maill);
      formData.append('phoneNum', commerceData.phoneNum);
      formData.append('typeService', commerceData.typeService);
      formData.append('descripton', commerceData.descripton);

      if (commerceData.files) {
        for (let i = 0; i < commerceData.files.length; i++) {
          console.log('i', i)
          const fileData = commerceData.files[i];
          console.log('fileData', fileData)
          const fileResponse = await fetch(fileData.filename);
          console.log('fileResponse', fileResponse)
          const fileBlob = await fileResponse.blob();
          console.log({fileBlob})
          formData.append('files', fileBlob, fileData.originalname);
        }
      }

      const res = await fetch(`${url}/filesd/uploads`, {
        method: 'POST',
        body: formData
      });

      if (!res.ok) {
        throw new Error('Error al enviar la solicitud');
      }

      const response = await res.json();
      console.log({ response });
      return true; 
    
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      return false;
    }
  }
}