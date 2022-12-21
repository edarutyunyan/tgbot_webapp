import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // console.log(window.Telegram.WebApp.initData);
    console.log(Telegram.WebApp.initData);
  })

  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
