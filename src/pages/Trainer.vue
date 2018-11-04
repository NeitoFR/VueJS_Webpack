<template>
    <div>
        <h1>Hello, I'm your {{ message }} page</h1>
        <TaskList></TaskList>
    </div>
</template>

<script>
import TaskList from "../components/TaskList";
export default {
  name: "Trainer",
  components: {
    TaskList
  },
  data: function() {
    return {
      message: "training",
      tasks: [
        {
          desc: "Task 1",
          completed: true
        },
        {
          desc: "Task 2",
          completed: true
        },
        {
          desc: "Task 3",
          completed: false
        },
        {
          desc: "Task 4",
          completed: false
        },
        {
          desc: "Task 5",
          completed: true
        }
      ]
    };
  },
  computed: {
    IncompleteTasks: function() {
      return this.tasks.filter(item => !item.completed);
    }
  }
};
</script>

<style>
</style>
