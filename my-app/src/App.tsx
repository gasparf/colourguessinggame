import { useEffect, useState } from "react";
import './App.css';
import React from "react";
import Slider from '@mui/material/Slider';



function App() {

  const [colour, setColour] = useState("");
  const [select, setSelect] = useState<string[]>([]);
  const [wrongSelect, setwrongSelect] = useState(false);
 // useState to allow for switching between light and dark mode
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
    } else {
      if (theme == 'dark') {
        setTheme('light')
      }
  }



  const pickColour = () => {
    const actual = getRandomColour();
    setColour(actual);
    setSelect([actual, getRandomColour(), getRandomColour()].sort(() => 0.5 - Math.random()));  
  }

  const getRandomColour = () =>  {
    const value = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    const colour =  new Array(6).fill("")
    .map(() => value[Math.floor((Math.random() * value.length ))])
    .join("");

    return `#${colour}`;
    
  };

  useEffect(() => {
    pickColour();
  }, []);


  function pickinputted(answer: string){
    if (answer === colour) {
      setwrongSelect(false);
       pickColour();
    } else {
      setwrongSelect(true);
    }
  }

  return (
    <div className={`App ${theme}`} > 

      <button className="themeToggle" onClick={changeTheme}> Change Theme </button>

      <div className="column">


        <div className="button-guess" style={{background : colour}}>

          {select.map(pick => (<button onClick={() => pickinputted(pick)} key={pick}>{pick}</button>))}

        </div>

        {wrongSelect && <div className="wrong"> wrong answer, try again </div>}
        
      </div>
  </div> 
  ) 
}


export default App;



