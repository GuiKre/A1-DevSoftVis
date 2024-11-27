import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tarefa } from "../../models/Tarefa";
import { Categoria } from "../../models/Categoria";

function TarefaAlterar() {
    const { id } = useParams();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("");
    const [categoriaId, setCategoriaId] = useState(0);
  
    useEffect(() => {
      if (id) {
        axios
          .get<Tarefa>(
            `http://localhost:5000/api/tarefas/buscar/${id}`
          )
          .then((resposta) => {
            setNome(resposta.data.titulo);
            setDescricao(resposta.data.descricao);
            buscarCategorias();
          });
      }
    }, []);
  
    function buscarCategorias() {
      axios
        .get<Categoria[]>("http://localhost:5020/api/categoria/listar")
        .then((resposta) => {
          setCategorias(resposta.data);
        });
    }
  
    function enviarTarefa(e: any) {
      e.preventDefault();
  
      const tarefa: Tarefa = {
        titulo: nome,
        descricao: descricao,
        status: status,
        categoriaId: categoriaId,
      };
  
      axios
        .put(`http://localhost:5000/api/tarefas/alterar/${id}`, tarefa)
        .then((resposta) => {
          console.log(resposta.data);
        });
    }
  
    return (
      <div id="alterar-tarefa" className="container">
        <h1>Alterar Tarefa</h1>
        <form onSubmit={enviarTarefa}>
          {/* <div>
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              //value={nome}
              required
              onChange={(e: any) => setNome(e.target.value)}
            />
          </div> */}
  
          <div>
            <label htmlFor="status">Alterar Status</label>
            <input
              type="text"
              id="status"
              value={status}
              name="status"
              onChange={(e: any) => setStatus(e.target.value)}
            />
          </div>
  
          {/* <div>
            <label htmlFor="categoria">Categorias</label>
            <select
              onChange={(e: any) => setCategoriaId(e.target.value)}
            >
              {categorias.map((categoria) => (
                <option
                  value={categoria.categoriaId}
                  key={categoria.categoriaId}
                >
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div> */}
  
          <button type="submit">Cadastrar Tarefa</button>
        </form>
      </div>
    );
  }
  
  export default TarefaAlterar;