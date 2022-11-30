import { Trash, Check } from "phosphor-react";
import styles from "./Tasks.module.css";
import Clipboard from "../assets/Clipboard.svg";

interface ArryTakes {
  data: [];
  onDeleteTasks: (task: string) => void;
  handleIsCompleteTaks: (task: string) => void;
  finishTakes: number;
}

interface ObjectArrayTakes {
  title: string;
  id: string;
  isComplete: boolean;
}

export function Tasks({
  data,
  onDeleteTasks,
  handleIsCompleteTaks,
  finishTakes,
}: ArryTakes) {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div className={styles.TasksCreate}>
          <p>Tarefas Criadas</p>
          <span>{data.length}</span>
        </div>

        <div className={styles.finished}>
          <p>Concluidas</p>
          {data.length === 0 ? (
            <span>0</span>
          ) : (
            <span className={styles.spanDe}>
              {finishTakes} de {data.length}
            </span>
          )}
        </div>
      </header>

      {data.length === 0 ? (
        <div className={styles.empty}>
          <img src={Clipboard} alt="" />
          <div>
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <ul className={styles.info}>
          {data.map((task: ObjectArrayTakes) => {
            return (
              <li key={task.id}>
                {task.isComplete ? (
                  <button
                    onClick={() => handleIsCompleteTaks(task.id)}
                    className={styles.checkedActive}
                  >
                    <Check size={12} />
                  </button>
                ) : (
                  <button
                    onClick={() => handleIsCompleteTaks(task.id)}
                    className={styles.checked}
                  ></button>
                )}
                <p>{task.title}</p>
                <button
                  className={styles.delete}
                  onClick={() => {
                    onDeleteTasks(task.id);
                  }}
                >
                  <Trash />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
