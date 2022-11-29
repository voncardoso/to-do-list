import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";
import Clipboard from "../assets/Clipboard.svg";
import ImgDelete from "../assets/trash.svg";
import { useState } from "react";

interface ArryTakes {
  data: [];
  onDeleteTasks: (task: string) => void;
}

export function Tasks({ data, onDeleteTasks }: ArryTakes) {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div className={styles.TasksCreate}>
          <p>Tarefas Criadas</p>
          <span>0</span>
        </div>

        <div className={styles.finished}>
          <p>Tarefas Concluidas</p>
          <span>0</span>
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
          {data.map((task) => {
            return (
              <li>
                <input type="checkbox" />
                <p>{task}</p>
                <button
                  onClick={() => {
                    onDeleteTasks(task);
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
