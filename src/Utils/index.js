export const showURL = (url) => {
  const ext = ['.png', '.jpg', '.jpeg', '.gif'];
  const regex = (ele) => new RegExp(ele, 'i');
  const showUrl = ext.some((ele) => url?.match(regex(ele)));
  return showUrl;
};
