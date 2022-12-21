import React, { useEffect } from 'react';
import { useTelegram } from "./hooks";

function App() {
  const { tg, user, toggleButton, sendData } = useTelegram();

  useEffect(() => {
    tg.ready();
    toggleButton();
  }, [tg, toggleButton]);
  tg.MainButton.onClick(() => sendData({ message: 'Main button was clicked!' }))
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
