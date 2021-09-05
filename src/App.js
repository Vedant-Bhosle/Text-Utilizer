
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

const [mode, setmode] = useState('light');
const togglemode=()=>{

  if (mode=== 'light') {
   setmode('dark'); 
   document.body.style.backgroundColor='rgb(7 0 23)';
  }
  
  else{
    setmode('light');
   document.body.style.backgroundColor='white';


  }
}
  return (<>
{/* <Router> */}
<Navbar title="Text Utilizer"  mode={mode} togglemode={togglemode} />
<Alert/>
<div className="container my-4">
{/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          
          {/* <Route exact path="/"> */}
<TextForm heading="Write a Text to analyze" mode={mode} />
            
          {/* </Route> */}
        {/* </Switch> */}

{/* <About/> */}
</div>
{/* // </Router> */}
    </>
  );
}

export default App;
