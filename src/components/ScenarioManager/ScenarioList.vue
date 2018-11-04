<template>
<div>
    <button @click="test">test</button>

</div>
</template>

<script>
import Scenario from "./Scenario";
import store from "../../store";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("scenarioStore", ["scenarios"])
  },
  methods: {
    test(evt) {}
  }
};
</script>

<style>
</style>
