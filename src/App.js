import './App.css';
import CharacterForm from './Components/CharacterForm/CharacterForm';

function App() {
  const onformValueHandler = (enteredData) => {
    console.log(enteredData.name, 'name');
    console.log(enteredData.age, 'age');
  }
  return (
    <div className="App">
      <CharacterForm onformValues={onformValueHandler} />
    </div>
  );
}

export default App;
