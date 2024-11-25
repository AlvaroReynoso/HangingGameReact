import { HangImages } from "./components/HangImages"; //import { } specific arrays,func,etc ,not file or variable
import { letters } from "./helpers/letters";
import "./App.css";
import { useEffect, useState } from "react";
import { getRandomWord } from "./helpers/getRandomWord";

//REPASAR TODO

function App() {
  const [word,setWord] = useState(getRandomWord()); //useState: a new change in a state, so useState behave about that change.
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length)); // const[first,sec]= sec is the param that will change first
  const [attemps, setAttemps] = useState(0);
  const [lose, setlose] = useState(false);
  const [win,setwin]=useState(false);
      // if the person lose
      useEffect(() => {                     //HOOKS, function
        if(attemps>=9){
          setlose(true)
        }
      }, [attemps]);

      //if person won
      useEffect(()=>{
        const currentHiddenWord=hiddenWord.split(' ').join('')
        if(currentHiddenWord===word)
        {
          setwin(true);
        }
      },[hiddenWord])

  const checkLetter = (letter: string) => {
    if(lose) return;                        // if i have 1 only result in the if's , i dont need {},just the action.
    if(win) return;                        // if i have 1 only result in the if's , i dont need {},just the action.

    if (!word.includes(letter)) {
      setAttemps(Math.min(attemps + 1, 9));
      return;
    }
    const hiddenArray = hiddenWord.split(" ");
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenArray[i] = word[i];
      }
    }
    setHiddenWord(hiddenArray.join(" "));  
  };

  const newGame=()=>{
  const newWord= getRandomWord();
  setWord(newWord);
  setHiddenWord("_ ".repeat(newWord.length));
  setAttemps(0);
  setlose(false);
  setwin(false);
  }

  return (
    <div className="App">
      {/* images */}
      <HangImages imageNumber={attemps} />

      {/* hide word */}

      <h3>{hiddenWord}</h3>

      {/* fail tries */}
      <h3>Tries: {attemps}</h3>

      {/* Lose message */}
      {
        (lose) ? 
        <p className="losePar">You lose, the word was: {word}</p>
        :""
      }
      {/* win message */}
      {(win) ?
        <p className="winPar">Congratulations, you win!</p>
        :''
      } 
      {/* letter buttons */}
      <div className="box-button">
        {letters.map((letter) => (
          <button key={letter} onClick={() => checkLetter(letter)}>
            {letter}
          </button>
        ))}
        <button className="newGame" onClick={newGame}>New Game</button>
      </div>
    </div>
  );
}

export default App;
