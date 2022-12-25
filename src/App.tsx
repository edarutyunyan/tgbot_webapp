import React, { useEffect } from 'react';
import { useTelegram } from "./hooks";

const BOT_SERVER_IP_ADDRESS = 'http//:217.18.62.216:4000';

function App() {
  const { tg, user, toggleButton, sendData } = useTelegram();

  useEffect(() => {
    tg.ready();
    toggleButton();
    tg.MainButton.onClick(() => sendData({ message: 'Main button was clicked!' }));
  }, [tg, toggleButton]);

  useEffect(() => {
    fetch(BOT_SERVER_IP_ADDRESS, {method: 'GET'}).then(res => console.log(res));
  }, [])

  return (
    <div className="App">
      <div>{`Hello ${user?.last_name ?? 'stranger'}!`}</div>

      <div>
        <button onClick={toggleButton}>Toggle button</button>
        <button onClick={() => tg.sendData(JSON.stringify({ dataFromWebApp: tg.initData }))}>Send data</button>
      </div>
    </div>
  );
}

export default App;
