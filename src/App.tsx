import React, { useEffect } from 'react';
import {useTelegram} from "./hooks";

function App() {
  const { tg, user, toggleButton } = useTelegram()

  useEffect(() => {
    tg.ready();
    toggleButton();
    tg.sendData(JSON.stringify({ dataFromWebApp: tg.initData }))
  }, [tg, toggleButton])

  return (
    <div className="App">
      {`Hello ${JSON.stringify(tg.initData) ?? 'stranger'}!`}
    </div>
  );
}

export default App;
