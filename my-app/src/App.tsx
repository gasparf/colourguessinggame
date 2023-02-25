import { useEffect, useState } from "react";
import './App.css';
import React from "react";
import Slider from '@mui/material/Slider';


function App() {

  const [colour, setColour] = useState("");
  const [select, setSelect] = useState<string[]>([]);
  const [wrongSelect, setwrongSelect] = useState(false); 
  const [dark, setDark] = useState("");

  // const [wrnogSelect, setwrongSelect] = <boolean | undefined>(false);




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

  // for stylistic purposes, we want to pick a complementary colour of the random colour picked
  // by definition a complementary colour
  


  function pickinputted(answer: string){
    if (answer === colour) {
      setwrongSelect(false);
       pickColour();
    } else {
      setwrongSelect(true);
    }
  }

  return (
    <div className="App" data-theme="dark"> 



      <div className="column">
        <div className="dmode_container">
        <span> Change Theme </span>  
        <label className="toggle"> 
          <Slider> </Slider>
        </label>
        </div>
        <div className="button-guess" style={{background : colour}}>
     
          {select.map(pick => (<button onClick={() => pickinputted(pick)} key={pick}>{pick}</button>))}

        </div>

        {wrongSelect && <div className="wrong"> Wrong Answer, Try Again! </div>}
        
      </div>
  </div> 
  ) 
}


export default App;



