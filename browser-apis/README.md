# Browser API Workshop
Take a look through the list of browser APIs below. Pick one (or more!) out that you'd like to try, read the MDN docs, and then build a quick sample app. You're trying to impress everyone else in the room here, so be creative! We'll present to teach other in the last few minutes of the session.

If none of the below APIs suit your fancy, check out [What Web Can Do Today](https://whatwebcando.today/) for a much more complete list.

Want to host your static files online to test from your mobile device? [Try Netlify](https://www.netlify.com/). It only takes a second to create a free account. Netlify will scrape a Github branch that you specify for deployments.

## APIS

### [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

##### Example:
```javascript
navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```

-----

[Browser Compatability](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API#Browser_compatibility)

### [Page Visibility](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)

When the user minimizes the window or switches to another tab, the API sends a visibilitychange event to let listeners know the state of the page has changed.

##### Example:
```javascript
window.addEventListener('visibilitychange', () => {
  if(document.hidden) {
    console.log('Tab is hidden')
  } else {
    console.log('Tab is focused')
  }
})
```

#### Use Cases:
* An application showing a dashboard of information doesn't want to poll the server for updates when the page isn't visible
* A site wants to switch off sounds when a device is in standby mode (user pushes power button to turn screen off)

-----

### [Online State](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/Online_and_offline_events)
In order to build a good offline-capable web application, you need to know when your application is actually offline. You also need to know when your application has returned to an 'online' status again.

```javascript
window.addEventListener('offline', networkStatus)
window.addEventListener('online', networkStatus)

function networkStatus(e) {
  console.log(e.type)
}
```

-----

### [Vibration](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)
Most modern mobile devices include vibration hardware, which lets software code provide physical feedback to the user by causing the device to shake. The Vibration API offers Web apps the ability to access this hardware, if it exists, and does nothing if the device doesn't support it.

```javascript
// single vibration
window.navigator.vibrate(200)
window.navigator.vibrate([200])

// vibration pattern
window.navigator.vibrate([200, 100, 200]);

// turn off vibration
window.navigator.vibrate(0)
```

[Browser Compatability](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API#Browser_compatibility)

-----

### [Device Orientation](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation)
Increasingly, web-enabled devices are capable of determining their orientation; that is, they can report data indicating changes to their orientation with relation to the pull of gravity. 

```javascript
//Orientation data contains four values. Read more about them on MDN.
function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha    = event.alpha;
  const beta     = event.beta;
  const gamma    = event.gamma;

  // Do stuff with the new orientation data
}

window.addEventListener("deviceorientation", handleOrientation, true);
```

[Browser Compatability](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation#Browser_compatibility)

-----

### [Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
The Clipboard API provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard. 

```javascript
navigator.clipboard.readText().then(
  clipText => document.queryElementSelector('.editor').innerText += clipText);
```

[Browser Compatability](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#Browser_compatibility)

-----

### [Ambient Light Events](https://developer.mozilla.org/en-US/docs/Web/API/Ambient_Light_Events)
The ambient light events are a handy way to make a web page or an application aware of any change in the light intensity. It allows them to react to such a change, for example by changing the color contrast of the User Interface (UI) or by changing the exposure necessary to take a picture.

```javascript
if ('ondevicelight' in window) {
  window.addEventListener('devicelight', function(event) {
    var body = document.querySelector('body');
    if (event.value < 50) {
      body.classList.add('darklight');
      body.classList.remove('brightlight');
    } else {
      body.classList.add('brightlight');
      body.classList.remove('darklight');
    }
  });
} else {
  console.log('devicelight event not supported');
}
```

[Browser Compatability](https://developer.mozilla.org/en-US/docs/Web/API/Ambient_Light_Events#Browser_compatibility)
