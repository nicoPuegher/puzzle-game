const checkScreen = () => {
  const windowScreen = window.screen.width;
  let rem;

  if (windowScreen <= 320) {
    rem = ['5rem', '3.8rem', '3rem'];
    return rem;
  }

  if (windowScreen <= 414) {
    rem = ['5rem', '4.5rem', '3.6rem'];
    return rem;
  }

  rem = ['6.5rem', '5rem', '4.5rem'];
  return rem;
};

export default checkScreen;
