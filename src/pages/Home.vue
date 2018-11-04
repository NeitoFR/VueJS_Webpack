<template>
<div>
    <h1>Home&Co</h1>
    <MQTTHelper></MQTTHelper>
    <FlexBoxTraining></FlexBoxTraining>
</div>
</template>

<script>
import MQTTHelper from "../components/MQTTHelper";
import FlexBoxTraining from "../components/FlexBoxTraining";

export default {
    name: 'Home',
    components: {
        MQTTHelper,
        FlexBoxTraining
    }
}
</script>

<style>

</style>
