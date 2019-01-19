chrome.app.runtime.onLaunched.addListener(function (launchData) {
  chrome.app.window.create('index.html', {
    'id':'main',
    'bounds': {
        'width': Math.round(window.screen.availWidth*0.7),
        'height': Math.round(window.screen.availHeight*0.7)
      }
    },function(win) {
      win.contentWindow.launchData = launchData;
  });
});
