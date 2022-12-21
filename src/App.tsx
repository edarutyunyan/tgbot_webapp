import React, { useEffect } from 'react';
import {useTelegram} from "./hooks";

function App() {
  const { tg, user, toggleButton } = useTelegram()

  useEffect(() => {
    toggleButton();
  }, [])

  return (
    <div className="App">
      {`Hello ${user?.first_name ?? 'stranger'}!`}
    </div>
  );
}

export default App;
