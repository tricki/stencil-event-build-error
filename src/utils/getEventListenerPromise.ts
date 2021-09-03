export function getEventListenerPromise(el: Element | Document, eventName: string): Promise<Event> {
  return new Promise(resolve => {
    el.addEventListener(eventName, e => resolve(e), { once: true });
  });
}
