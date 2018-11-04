<template>
  <div>
    <Header></Header>
    <ScenarioManager></ScenarioManager>
    <!-- <Scenario></Scenario> -->
    <!-- <DomoticRoom></DomoticRoom> -->
  </div>

</template>

<script>
import Header from "../components/common/Header"
import Scenario from "../components/ScenarioManager/Scenario"
import DomoticRoom from "../components/DomoticRoom"
import ScenarioManager from "../components/ScenarioManager/ScenarioManager"

export default {
  name: "Index",
  components: {
    Header,
    Scenario,
    DomoticRoom,
    ScenarioManager
  }
};
</script>

<style>
</style>
