<template>
    <div>
        <h1>Hello, I'm your {{ message }} page</h1>
        <button @click="connectMqtt">Boutton</button>
        <button @click="_Test">Boutton</button>
        <button @click="increment">++</button>
        <span>{{count}}</span>
        <span>{{doubleCount}}</span>
    </div>
</template>

<script>
import TaskList from "../components/TaskList";
import { store } from "../store/store"
import mqtt from "mqtt";
import { mapGetters, mapMutations } from 'vuex';

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
    },
    ...mapGetters({
      doubleCount: 'getCount'
        }),
    
    count() {
      return store.state.count;
    }
  },

  methods: {
    connectMqtt: function() {
      var client = mqtt.connect(
        "ws://localhost:1884",
        { username: "iot", password: "iot" }
      );

      client.on("connect", function() {
        console.log("Connected to MQTT");
        client.subscribe('test', function(err){console.log(err);})
        setInterval(function() {
          client.publish("test", Math.floor(Math.random() * 50).toString());
        }, 5000);
      });
      client.on('message', function(topic, message) {
        console.log('Message on topic : '+ topic);
        console.log(message);       
      })
    },
    _Test: function(evt) {
      console.log('Test button');
      console.log(evt);
      console.log(this.count);
    },
    ...mapMutations([
      'increment'
    ])
  }
};
</script>

<style>
</style>
