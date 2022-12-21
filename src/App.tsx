import React, { useEffect } from 'react';
import { useTelegram } from "./hooks";

function App() {
  const { tg, user, toggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
    tg.sendData({ dataFromWebApp: tg.initData })
  }, [tg, toggleButton])

  return (
    <div className="App">
      <div>{`Hello ${user?.last_name ?? 'stranger'}!`}</div>

      <div>
        <button onClick={toggleButton}>Toggle button</button>
      </div>
    </div>
  );
}

export default App;
