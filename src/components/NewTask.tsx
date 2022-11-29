import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./NewTask.module.css";

export function NewTask() {
  const [takesText, setTakesText] = useState("");
  const [dataTakes, setDataTakes] = useState<any>([]);

  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault();

    setDataTakes([...dataTakes, takesText]);
    setTakesText("");
  }

  function handleNewTaskesChenge(event: ChangeEvent<HTMLInputElement>) {
    setTakesText(event.target.value);
  }

  console.log("data", dataTakes);
  return (
    <form onSubmit={handleCreateNewToDo} className={styles.form}>
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
