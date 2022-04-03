import React, { useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';

const alankey = '28eeee6646fb6004381645abb0c9a1322e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

  useEffect( ()=> {
    alanBtn({
      key: alankey,
      onCommand: ({command}) => {
        if(command === 'testCommand'){
          alert('this code was executed');
        }
      }
    })
  }, [] )
  return (
    <div>
      <h1>Alan AI News App</h1>
    </div>
  )
}
export default App;