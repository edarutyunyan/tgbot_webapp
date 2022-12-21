import React, { useEffect } from 'react';
import {useTelegram} from "./hooks";

function App() {
  const { tg, user, toggleButton } = useTelegram()

  useEffect(() => {
    tg.ready();
    tg.sendData(JSON.stringify({ dataFromWebApp: tg.initData }))
  }, [tg, toggleButton])

  return (
    <div className="App">
      {`Hello ${user?.first_name ?? 'stranger'}!`}
      <button onClick={toggleButton}>Toggle button</button>
    </div>
  );
}

export default App;
