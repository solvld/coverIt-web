export function saveFile(url: string, filename: string): void {
  // Get file name from url.
  const urlFilename: string = url
    .substring(url.lastIndexOf('/') + 1)
    .split('?')[0]

  // Create a new XMLHttpRequest object
  const xhr: XMLHttpRequest = new XMLHttpRequest()

  // Set the response type to 'blob' to handle binary data
  xhr.responseType = 'blob'

  // Define the onload event handler
  xhr.onload = function () {
    // Create a new anchor element
    const a: HTMLAnchorElement = document.createElement('a')

    // Create a URL for the blob response and set it as the href of the anchor element
    a.href = window.URL.createObjectURL(xhr.response)

    // Set the file name for the download
    a.download = filename + '-' + urlFilename

    // Set the display style to 'none' to make the anchor element invisible
    a.style.display = 'none'

    // Append the anchor element to the body
    document.body.appendChild(a)

    // Programmatically click the anchor element to trigger the download
    a.click()

    // Remove the anchor element from the body
    document.body.removeChild(a)
  }

  // Open a GET request to the provided URL
  xhr.open('GET', url)

  // Send the request
  xhr.send()
}
