export function getFromLS<T extends object = object>(key: string): T | void {
  const string = localStorage.getItem(key)
  if (string) {
    try {
      return JSON.parse(string)
    } catch (error) {
      console.log(error)
    }
  }
}

export function setToLS(key: string, obj: object) {
  localStorage.setItem(key, JSON.stringify(obj))
}
