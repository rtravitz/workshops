document.addEventListener("DOMContentLoaded", function(event) { 
  function networkStatus(e) {
    var htmlBox = document.getElementsByTagName('html')[0]
    var statusHeader = document.getElementsByClassName('status')[0]
    var newStatus = e.type.charAt(0).toUpperCase() + e.type.slice(1)

    statusHeader.innerText = newStatus

    if (e.type === 'offline') {
      htmlBox.classList.remove('onContainer')
      htmlBox.classList.add('offContainer')
      statusHeader.classList.remove('on')
      statusHeader.classList.add('off')
    } else {
      htmlBox.classList.remove('offContainer')
      htmlBox.classList.add('onContainer')
      statusHeader.classList.remove('off')
      statusHeader.classList.add('on')
    }
  }

  window.addEventListener('offline', networkStatus)
  window.addEventListener('online', networkStatus)
})


