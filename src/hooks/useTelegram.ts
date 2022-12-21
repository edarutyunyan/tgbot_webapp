const tg = window.Telegram.WebApp;
export const useTelegram = () => {

  const onClose = () => tg.close();
  const toggleButton = () => tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show();

  return {
    tg,
    toggleButton,
    user: tg.initData.user,
  }
}