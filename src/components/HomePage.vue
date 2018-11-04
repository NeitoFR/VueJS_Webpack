<template>
    <div>
        <Scenario></Scenario>
        <DomoticRoom></DomoticRoom>
    </div>
</template>

<script>
import Scenario from "./Scenario" 
import DomoticRoom from "./DomoticRoom"

export default {
    name: "HomePage",
    components: {
        Scenario,
        DomoticRoom
    }
}

</script>
