export const allowOrDisallowScroll = (allow: boolean) => {
  document.body.style.overflowY = allow ? 'auto' : 'hidden';
};
