import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

function App() {
  const [dataTakes, setDataTakes] = useState<any>([]);
  return (
    <section>
      <Header />
      <main>
        <NewTask />
      </main>
    </section>
  );
}

export default App;
