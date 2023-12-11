export interface IToken {
  iss: string;
  aud: string;
  data: string;
  enterprise: number;
  exp: number;
  idUsuario: string;
  rol: string;
  usuario: string;
}

export const tokenFail: IToken = {
  iss: '',
  aud: '',
  data: '',
  enterprise: 0,
  exp: 100000,
  idUsuario: '',
  rol: '',
  usuario: '',
};

function parseJWT(token: string): IToken {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window.atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  return JSON.parse(jsonPayload);
}