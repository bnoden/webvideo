export const setLayerColor = (el, ref, str, opacitometer) => {
  const qsa = document.querySelectorAll(el);
  if (qsa.length) {
    for (let i = 0; i < qsa.length; i++) {
      if (opacitometer) {
        qsa[i].style.opacity = document.querySelector(opacitometer).value;
      }
      if (str === 'bgcolor') {
        qsa[i].style.backgroundColor = ref.value;
      } else if (str === 'color') {
        qsa[i].style.color = ref.value;
      }
    }
  }
};
