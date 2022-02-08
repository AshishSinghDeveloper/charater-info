import {useState} from 'react';
import './App.css';
import CharacterForm from './Components/CharacterForm/CharacterForm';
import CharacterList from './Components/CharacterList/CharacterList';

function App() {
  const[charInfo, setCharInfo] = useState('');
  const onformValueHandler = (enteredData) => {
    console.log(enteredData.name, 'name');
    console.log(enteredData.age, 'age');
    setCharInfo((prevState) => {
        return{
          ...prevState,
          enteredData
        }
    });
  }
  return (
    <div className="App">
      <CharacterForm onformValues={onformValueHandler} />
      <CharacterList items={charInfo.enteredData}/>
    </div>
  );
}

export default App;
