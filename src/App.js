import { useState } from "react";
import "./App.css";
import CharacterForm from "./Components/CharacterForm/CharacterForm";
import CharacterList from "./Components/CharacterList/CharacterList";
import AddUser from "./Components/UI/Users/AddUser";

function App() {
  const [charInfo, setCharInfo] = useState('');
  const onformValueHandler = (enteredData) => {
    setCharInfo((prevState) => {
      return [enteredData, ...prevState];
    });
  };
  return (
    <div>
      <CharacterForm  onformValues={onformValueHandler} />
      <AddUser />
      {charInfo.length > 0 && <CharacterList items={charInfo} />}
    </div>
  );
}

export default App;
