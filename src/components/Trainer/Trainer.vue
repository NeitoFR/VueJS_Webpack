<template>
    <div>
        <h1>Hello, I'm your {{ message }} page</h1>
        <h2>All Tasks</h2>
        <ul>
            <li v-for="item in tasks" v-text="item.desc"></li>
        </ul>
        <h2>Uncompleted Tasks</h2>
        <ul>
            <li v-for="item in IncompleteTasks" v-text="item.desc" v-if="!item.completed"></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Trainer",
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
