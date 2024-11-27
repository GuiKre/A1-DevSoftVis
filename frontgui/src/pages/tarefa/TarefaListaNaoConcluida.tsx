import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tarefa } from "../../models/Tarefa";
import axios from "axios";

function TarefaListaNaoConcluida() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  
    useEffect(() => {
        axios
        .get("http://localhost:5000/api/tarefas/naoconcluidas")
        .then((response) => {
          setTarefas(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar as tarefas:", error);
        });
    }, []);
  
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <table border={5}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Criado Em</th>
              <th>Deletar</th>
              <th>Alterar</th>
            </tr>
          </thead>
          <tbody>
            {tarefas.map((tarefa) => (
              <tr key={tarefa.id}>
                <td>{tarefa.id}</td>
                <td>{tarefa.titulo}</td>
                <td>{tarefa.categoria?.nome}</td>
                <td>{tarefa.criadoEm}</td>
                <td>
                  <Link to={`/pages/tarefa/alterar/${tarefa.id}`}>
                    Alterar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default TarefaListaNaoConcluida;