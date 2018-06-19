export function decodeJWT(token: string): any {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}

export function checkToken(token: string) {
  const now = (Date.now() / 1000) | 0;
  const exp = decodeJWT(token).exp;
  return now < exp;
}

export function formURL(targetURL: string, data: object): string {
  for (const key in data) {
    const regex: RegExp = new RegExp(`{${key}}`);
    targetURL = targetURL.replace(regex, data[key]);
  }

  return targetURL;
}
