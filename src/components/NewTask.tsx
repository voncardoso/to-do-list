import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import styles from "./NewTask.module.css";

export function NewTask() {
  const [dataTakes, setDataTakes] = useState([]);
  const [takesText, setTakesText] = useState("");

  function handleCreateNewToDo() {}

  function handleNewTaskesChenge(event: ChangeEvent<HTMLInputElement>) {
    setTakesText(event.target.value);
  }

  console.log("data", dataTakes);
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={takesText}
        onChange={handleNewTaskesChenge}
      />
      <button>
        Criar
        <PlusCircle size={18} weight="bold" />
      </button>
    </form>
  );
}
