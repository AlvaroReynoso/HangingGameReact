import {HangImages} from './components/HangImages'; //import { } specific arrays,func,etc ,not file or variable
import {letters} from './helpers/letters';
import './App.css';
import { useState } from 'react';

//REPASAR TODO

function App() {

 const [word]=useState('COMPUTADORA');            //useState: a new change in a state, so useState behave about that change.
 const [hiddenWord]=useState('_ '.repeat(word.length));

const [attemps,setAttemps]=useState(0);
const checkLetter=(letter:string)=>{

  if(!word.includes(letter)){
    setAttemps(Math.min(attemps+1,9))
  }

 }


  return (
    <div className="App">

    {/* images */}
    <HangImages imageNumber={attemps}/>
    {/* hide word */}
    <h3>{hiddenWord}</h3>
    {/* fail tries */}
    <h3>Tries: {attemps}</h3>
    {/* letter buttons */}
    <div className="box-button">
    {
      letters.map( (letter) =>(
      <button key={letter} onClick={()=>checkLetter(letter)}>
      {letter}
      </button>
    ))
    }
    </div>

    </div>
  )

}

export default App;
