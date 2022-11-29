import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./NewTask.module.css";
import { Tasks } from "./Tasks";

export function NewTask() {
  const [takesText, setTakesText] = useState("");
  const [dataTakes, setDataTakes] = useState<any>([]);

  // criar a o item na to-do list
  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault();

    setDataTakes([...dataTakes, takesText]);
    setTakesText("");
  }

  // pegar o evento da input
  function handleNewTaskesChenge(event: ChangeEvent<HTMLInputElement>) {
    setTakesText(event.target.value);
  }

  function deleteTasks(task: string) {
    const taskTextDelete = dataTakes.filter((taskItem: string) => {
      return taskItem !== task;
    });

    setDataTakes(taskTextDelete);
  }

  return (
    <>
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
      <Tasks data={dataTakes} onDeleteTasks={deleteTasks} />
    </>
  );
}
