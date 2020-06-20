const url = window.location.href;

const injectCss = path => {
  let link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", chrome.extension.getURL(path));
  document.getElementsByTagName("head")[0].appendChild(link);
}

const injectJs = path => {
  let script = document.createElement("script");
  script.setAttribute("src", chrome.extension.getURL(path));
  document.getElementsByTagName("body")[0].appendChild(script);
}

if(url.includes("benedu.co.kr")) {
  injectCss("css/global.css");
  if(url.includes("/StudentHome")) {
    injectCss("css/studentHome.css");
    injectJs("js/studentHome.js");
  }
}