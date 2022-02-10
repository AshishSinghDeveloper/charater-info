import { useState } from "react";
import "./App.css";
import CharacterForm from "./Components/CharacterForm/CharacterForm";
import CharacterList from "./Components/CharacterList/CharacterList";
import IntroModal from "./Components/Modal/IntroModal";

function App() {
  const [charInfo, setCharInfo] = useState('');
  const onformValueHandler = (enteredData) => {
    setCharInfo((prevState) => {
      return [enteredData, ...prevState];
    });
  };
  return (
    <div className="character-app">
      <CharacterForm  onformValues={onformValueHandler} />
      {charInfo.length > 0 && <CharacterList items={charInfo} />}
    </div>
  );
}

export default App;
