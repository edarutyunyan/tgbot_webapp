// import { TelegramWebApps } from "telegram-webapps-types";
// ReturnType { tg: TelegramWebApps.WebApp, toggleButton: () => void, user: TelegramWebApps.WebAppUser }

const tg = window.Telegram.WebApp;
export const useTelegram = () => {

  const onClose = () => tg.close();
  const toggleButton = () => tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show();

  return {
    tg,
    toggleButton,
    user: tg?.initDataUnsafe?.user,
  }
}