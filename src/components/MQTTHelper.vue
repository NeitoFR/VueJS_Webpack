<template>
<div class="flex flex--col card container">
  <div class="flex flex--row flex__item--top">
    <span class="flex__item--top">Connexion to MQTT Broker</span><div class="flex__item--top" v-bind:class="{'green-led' : isMQTTConnected, 'red-led': !isMQTTConnected}"></div>
  </div>
  <div class="flex flex--row flex__item--top">
    <span class="flex__item--top">Lumière</span><div class="flex__item--top" v-bind:class="{'green-led' : lightState, 'red-led': !lightState}"></div>
  </div>
  <div class="flex__item flex flex--row">
    <button @click="sendToMQTT(1)" class="flex__item--top">Turn ON</button>
    <button @click="sendToMQTT(2)" class="flex__item--top">Turn OFF</button>
  </div>
</div>
</template>

<script>
import mqtt from "mqtt";
import { mapState, mapMutations } from "vuex";
import store from "../store";

var client;

export default {
  data() {
    return {
      lightState: false
    };
  },
  methods: {
    ...mapMutations("mqttStore", ["setConnectionState"]),
    sendToMQTT(val) {
      client.publish("test", val.toString());
    },
    _setSub(client) {
      client.subscribe("test/+/lightState", err => {
        if (err) console.log("Error while subscribing", err);
      });
      client.on("message", (topic, message) => {
        console.log("[" + topic + "] :" + message);
        console.log(JSON.parse(message));
        this.lightState = JSON.parse(message).state;
      });
    },
    _setConnectionErrorEventHandler(tab, client) {
      tab.forEach(item => {
        client.on(
          item,
          function(evt) {
            if (!client.connected) {
              console.log("Connection to MQTT lost", evt);
              this.setConnectionState(false);
            }
          }.bind(this)
        );
      });
      console.log("Connection error handler set");
    }
  },
  computed: {
    ...mapState("mqttStore", ["isMQTTConnected"])
  },
  mounted() {
    console.log("Connection to MQTT Server");
    client = mqtt.connect(
      "ws://localhost:1884",
      { username: "iot", password: "iot" }
    );
    client.on(
      "connect",
      function() {
        console.log("Connected to MQTT");
        this.setConnectionState(true);
      }.bind(this)
    );
    this._setSub(client);
    this._setConnectionErrorEventHandler(
      ["error", "reconnect", "close", "offline", "end"],
      client
    );
  }
};
</script>

<style scoped>
.container {
  padding: 18px;
  margin: 12px;
  width: 300px;
}
.green-led {
  margin-left: 8px;
  width: 15px;
  height: 15px;
  background-color: #abff00;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
    #89ff00 0 2px 12px;
}
.red-led {
  margin-left: 8px;
  width: 15px;
  height: 15px;
  background-color: #f00;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
    rgba(255, 0, 0, 0.5) 0 2px 12px;
}
</style>
