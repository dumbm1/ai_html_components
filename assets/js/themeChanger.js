function changeTheme(csInterface) {
 let appSkinInfo = csInterface.hostEnvironment.appSkinInfo;

 updateThemeWithAppSkinInfo(appSkinInfo);

 csInterface.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, onAppThemeColorChanged);

 /**
  * Update the theme with the AppSkinInfo retrieved from the host product.
  */
 function updateThemeWithAppSkinInfo(appSkinInfo) {
  let fontSize = appSkinInfo.baseFontSize;
  let appBgColor = appSkinInfo.panelBackgroundColor.color;
  let html = document.documentElement;

  let fontFam = appSkinInfo.baseFontFamily;

  console.log(appBgColor);

  html.style.fontSize = fontSize + 'px';
  // document.body.style.fontSize = fontSize + 'px';

/*  if (appBgColor.red < 180) {
   html.setAttribute('data-theme-dark', '');
   console.log("Dark theme");
  } else {
   html.removeAttribute('data-theme-dark');
   console.log("Light theme");
  }*/
  if (appBgColor.red == 50) {
 /*  document.body.style.background = '#323232';
   console.log('bg darker');*/
   html.removeAttribute('data-theme-dark');
   html.removeAttribute('data-theme-light');
   html.setAttribute('data-theme-darker', '');
  } else if (appBgColor.red == 83) {
/*   document.body.style.background = '#535353';
   console.log('gb dark');*/
   html.removeAttribute('data-theme-darker');
   html.removeAttribute('data-theme-light');
   html.setAttribute('data-theme-dark', '');
  } else if (appBgColor.red == 184) {
   html.removeAttribute('data-theme-dark');
   html.removeAttribute('data-theme-darker');
   html.setAttribute('data-theme-light', '');
  /* document.body.style.background = '#b8b8b8';
   console.log('bg light');*/
  } else if (appBgColor.red == 240) {
   html.removeAttribute('data-theme-dark');
   html.removeAttribute('data-theme-darker');
   html.removeAttribute('data-theme-light');
  /* document.body.style.background = '#f0f0f0';
   console.log('bg lighter');*/
  }
 }

 function onAppThemeColorChanged(event) {
  var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
  updateThemeWithAppSkinInfo(skinInfo);
 }
}
