export function setCookie(name, value) {
   var now = new Date();
   now.setTime(now.getTime() + 1 * 3600 * 1000);
   document.cookie = name + '=' + value + '; expires=' + now.toUTCString() + '; path=/';
}