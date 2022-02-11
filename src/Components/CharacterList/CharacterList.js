import Card from "../UI/Card";
import CharacterDetails from "./CharacterDetails";
import styles from "./CharacterList.module.css";

const CharacterList = (props) => {
  // if(props.items.enteredData.length === 0){
  //   return <div>No character found</div>
  //}
  return (
    <Card className={styles.users}>
      <ul>
        {props.items.map((data) => (
          <li>
            <CharacterDetails name={data.name} age={data.age} key={data.id} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default CharacterList;
