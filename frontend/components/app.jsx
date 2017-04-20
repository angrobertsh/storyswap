import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div className="App">
    <GreetingContainer />
      {children}
  </div>
);

export default App;
