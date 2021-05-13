import React from 'react';

export const TodoList = (props) => {
  return (
    <div>
      <label>Tarefa:</label>
      <input id="task" type="text" autoFocus></input>
      <label>Tempo gasto:</label>
      <input id="timeSpent" type="text"></input>
      <button onClick={props.onSaveData}>Adicionar tarefa</button>
      <br />
      <label>Tarefas feitas:</label>
      <table>
        {props.tasks.map((task) => {
          return (
            <tr>
              <td>{task.task}</td>
              <td>{task.timeSpent}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
