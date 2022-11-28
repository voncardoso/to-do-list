import styles from "./Tasks.module.css";
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

            <div>
                
            </div>
        </section>
    )
}