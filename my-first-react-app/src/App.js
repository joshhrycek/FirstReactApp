import React from 'react';
import Split from './composition/Split';
import './App.css'


function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={23}>
        blah BLAH BLAH BLAH 
      </Split>
      <Split className='right'>
        pomf POMF POMF PMF POMF [MFASDF]
      </Split>
    </main>
  );
}

export default App;