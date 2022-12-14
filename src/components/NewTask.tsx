import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./NewTask.module.css";
import { Tasks } from "./Tasks";
import { v4 as uuidv4 } from "uuid";

interface ObjectArrayTakes {
  title: string;
  id: string;
  isComplete: boolean;
}

export function NewTask() {
  const [takesText, setTakesText] = useState("");
  const [dataTakes, setDataTakes] = useState<any>([]);
  const finishTakes = dataTakes.filter(
    (task: ObjectArrayTakes) => task.isComplete
  ).length;

  // criar a o item na to-do list
  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault();

    const task = {
      id: uuidv4(),
      title: takesText,
      isComplete: false,
    };

    setDataTakes([...dataTakes, task]);
    setTakesText("");
  }

  // pegar o evento da input
  function handleNewTaskesChenge(event: ChangeEvent<HTMLInputElement>) {
    setTakesText(event.target.value);
  }

  function deleteTasks(task: string) {
    const taskTextDelete = dataTakes.filter((taskItem: ObjectArrayTakes) => {
      return taskItem.id !== task;
    });

    console.log("taskTextDelete", taskTextDelete);
    setDataTakes(taskTextDelete);
  }

  function handleIsCompleteTaks(id: string) {
    const newtaske = dataTakes.map((taskItem: ObjectArrayTakes) => {
      if (id === taskItem.id) {
        taskItem.isComplete
          ? (taskItem.isComplete = false)
          : (taskItem.isComplete = true);
      }
      return taskItem;
    });

    setDataTakes(newtaske);
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
      <Tasks
        data={dataTakes}
        onDeleteTasks={deleteTasks}
        handleIsCompleteTaks={handleIsCompleteTaks}
        finishTakes={finishTakes}
      />
    </>
  );
}
