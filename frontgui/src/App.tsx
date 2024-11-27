import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import TarefaLista from "./pages/tarefa/TarefaLista";
import TarefaCadastro from "./pages/tarefa/TarefaCadastro";
import TarefaAlterar from "./pages/tarefa/TarefaAlterar";
import TarefaListaConcluida from "./pages/tarefa/TarefaListaConcluida";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/listar">Listar Tarefas</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/cadastrar">
                Cadastrar Tarefa
              </Link>
            </li>
            <li>
              <Link to="/pages/tarefa/naoconcluidas">
                Listar Tarefas não Concluidas
              </Link>
            </li>
            <li>
              <Link to="/pages/tarefa/concluidas">
                Listar Tarefas Concluidas
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TarefaLista />} />
          <Route
            path="/pages/tarefa/listar"
            element={<TarefaLista />}
          />
          <Route
            path="/pages/tarefa/listarconcluidas"
            element={<TarefaListaConcluida />}
          />
          <Route
            path="/pages/tarefa/listarnaoconcluidas"
            element={<TarefaLista />}
          />
          <Route
            path="/pages/tarefa/cadastrar"
            element={<TarefaCadastro />}
          />
          <Route
            path="/pages/tarefa/alterar/:id"
            element={<TarefaAlterar />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
