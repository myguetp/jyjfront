import { ref, type Ref } from "vue";
import { useHttpStore } from "./store/httpstore";

export default class AuthService {

  private jwt: Ref<string>

  constructor() {
    this.jwt = ref<string>('')
  }

  getJwt(): Ref<String> {
    return this.jwt
  }
  
  async login(email: string, password: string): Promise<boolean> {
    try {
      const url = import.meta.env.VITE_APP_SERVICE_URL 
      const res = await fetch(`${url}/auth/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + this.jwt.value
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const response = await res.json();
      console.log({ response });
      
      
      const storehttp = useHttpStore()

      storehttp.$patch({ idUser: response.user._id })
      storehttp.$patch({ useName: response.user.name })

      

      if (response.token) {
        this.jwt.value = response.token,
        storehttp.$patch({ tokenAuth: this.jwt.value })
        sessionStorage.setItem('token', this.jwt.value);

        return true;
      } else {
        // Handle the case where login fails
        return false;
      }
    } catch (error) {
      console.log({ error });
      return false;
    }
  }
}