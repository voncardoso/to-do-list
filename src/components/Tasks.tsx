import styles from "./Tasks.module.css";
import Clipboard from "../assets/Clipboard.svg"


export function Tasks(){
    return(
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

            <div className={styles.empty}>
                <img src={Clipboard} alt="" />
                <div>
                    <h2>Você ainda não tem tarefas cadastradas</h2>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </section>
    )
}