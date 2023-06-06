function ajaxPromise(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    xhr.onreadystatechange = () => {
      if (this.readyState === 4 && this.status === 200) {
        resolve(this.responseText)
      } else {
        reject({ code: this.status, reason: this.response })
      }
    }
    xhr.send()
  })
}