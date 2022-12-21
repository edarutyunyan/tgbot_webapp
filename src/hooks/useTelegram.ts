import {TelegramWebApps} from "telegram-webapps-types";

const tg = window.Telegram.WebApp;
export const useTelegram = (): {tg: TelegramWebApps.WebApp, toggleButton: () => void, user: TelegramWebApps.WebAppUser} => {

  const onClose = () => tg.close();
  const toggleButton = () => tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show();

  return {
    tg,
    toggleButton,
    user: tg.initData.user,
  }
}