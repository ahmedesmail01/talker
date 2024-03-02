export async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    throw Error("servise worker is not supported for this browser");
  }
  await navigator.serviceWorker.register("/serviceWorker.js");
}

export async function getReadyServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    throw Error("servise worker is not supported for this browser");
  }
  return navigator.serviceWorker.ready;
}
