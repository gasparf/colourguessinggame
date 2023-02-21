import { useEffect, useState } from "react";
import './App.css';
import React from "react";

function App() {

  const [colour, setColour] = useState("");
  const [select, setSelect] = useState<string[]>([]);
  const [wrongSelect, setwrongSelect] = useState(false);


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



  // useEffect(() => {
  //   // to dynamically change the colour of the guess button
  //     const chosenColour = getRandomColour();
  //     setColour(chosenColour);
  //     // we use sort and the math function as a little hack to arrange the coloured buttons 
  //     setSelect([chosenColour, getRandomColour(), getRandomColour()].sort(() => 0.5 - Math.random()));
  //   }, []); 

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
    <div className="App"> 
    
      <div className="column">

        <div className="button-guess" style={{background : colour}}>

          {select.map(pick => (<button onClick={() => pickinputted(pick)} key={pick}>{pick}</button>))}

        </div>

        {wrongSelect && <div className="wrong"> Wrong Answer </div>}
        
      </div>
  </div> 
  ) 
}


export default App;



