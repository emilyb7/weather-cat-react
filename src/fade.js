const fadeOut = (element) => {
  let op = 1;
  let time = setInterval(() => {
    element.style.opacity = op;
    if (op <= 0.1) {
      clearInterval(time);
    }
    op -= 0.2;
  }, 50);
}

const fadeIn = (element) => {
  let op = 0;
  let time = setInterval(() => {
    element.style.opacity = op;
    if (op >= 1) {
      clearInterval(time);
    }
    op += 0.2;
  }, 50)
};

export default {fadeOut: fadeOut, fadeIn: fadeIn};
