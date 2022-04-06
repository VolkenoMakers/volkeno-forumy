type AjouteInformation = {
  titre: string
  contenu: string
}

export const fetchAddToken = async (
  { titre, contenu }: AjouteInformation,
  apiBase: string,
  endpoint: string
) => {
  const request = new Request(`${apiBase}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify({ titre, contenu }),
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
  return fetch(request).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}

export const useLogin = async (
  { titre, contenu }: AjouteInformation,
  apiBase: string,
  endpoint: string,
  onSuccess: () => void,
  onFailure: () => void
) => {
  return fetchAddToken({ titre, contenu }, apiBase, endpoint)
    .then(({ token }) => {
      window.sessionStorage.setItem('token', token)
      onSuccess()
    })
    .catch(() => {
      onFailure()
    })
}
