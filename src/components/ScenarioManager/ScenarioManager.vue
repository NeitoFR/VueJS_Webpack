<template>
<div>
    <button>Ajouter Scenario</button>
    <div class="flex flex--col container2 card">
        <ScenarioList></ScenarioList>
    </div>
</div>

</template>

<script>
import ScenarioList from "./ScenarioList";
import store from "../../store";
import { mapState, mapMutations } from "vuex";

export default {
  name: "ScenarioManager",
  components: {
    ScenarioList
  }
};
</script>

<style scoped>
.container2 {
  padding: 18px;
  margin: 12px;
}
</style>
