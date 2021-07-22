import Button from './components/Button';
import Box from './components/Box';
import React, { useState } from "react";
import CheckBox from "./components/CheckBox"
import './App.css';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  }
  return (
    <div>
      <CheckBox onChange={onChange} checked={check}>
        다음 약관에 모두 동의 
      </CheckBox>
      <p>
        <b>check: </b>
        {check ? 'true' : 'false'}
      </p>
    </div>

    // <div className="App">
    //   <Box/>
    //   <div className="buttons">
    //     <Button size="large" onClick={() => console.log('클릭됐다!')}>BUTTON</Button>
    //     <Button>BUTTON</Button>
    //     <Button size="small">BUTTON</Button>
    //   </div>
    //   <div className="buttons">
    //     <Button size="large" color="gray">
    //       BUTTON
    //     </Button>
    //     <Button color="gray">BUTTON</Button>
    //     <Button size="small" color="gray">
    //       BUTTON
    //     </Button>
    //   </div>
    //   <div className="buttons">
    //     <Button size="large" color="pink">
    //       BUTTON
    //     </Button>
    //     <Button color="pink">BUTTON</Button>
    //     <Button size="small" color="pink">
    //       BUTTON
    //     </Button>
    //   </div>
    //   <div className="buttons">
    //     <Button size="large" color="blue" outline>
    //       BUTTON
    //     </Button>
    //     <Button color="gray" outline>
    //       BUTTON
    //     </Button>
    //     <Button size="small" color="pink" outline>
    //       BUTTON
    //     </Button>
    //   </div>
    //   <div className="buttons">
    //     <Button size="large" color="blue" fullWidth>
    //       BUTTON
    //     </Button>
    //     <Button size="large" color="gray" fullWidth>
    //       BUTTON
    //     </Button>
    //     <Button size="large"  color="pink" fullWidth>
    //       BUTTON
    //     </Button>
    //   </div>
    // </div>
  );
}

export default App;
