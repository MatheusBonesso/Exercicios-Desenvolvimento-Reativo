<template>
  <div>
    <h1>Vue Todo</h1>

    <label>Tarefa:</label>
    <input id="task" autofocus type="text" />
    <label>Tempo Gasto:</label>
    <input id="timeSpent" type="text" />
    <button @click="addTask()">Salvar tarefa</button>
    <p>Minhas tarefas:</p>
    <ul>
      <li v-for="task in tasks">
        Task: {{ task.task }} TimeSpent: {{ task.timeSpent }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      tasks: [{ task: "Correr", timeSpent: "00:15" }]
    };
  },
  methods: {
    addTask: function() {
      const newTask = document.getElementById("task").value;
      const newTimeSpent = document.getElementById("timeSpent").value;
      const newTaskList = { task: newTask, timeSpent: newTimeSpent };
      this.tasks.push(newTaskList);
    }
  }
};
</script>

<style></style>
