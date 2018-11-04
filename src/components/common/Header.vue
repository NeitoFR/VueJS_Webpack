<template>
    <div class="flex-container">
        <div class="title center">
            <h1>{{ title }}</h1>
        </div>
        <div class="inscription">
            {{ inscription }}
        </div>
    </div>
</template>

<script>
    export default {
      name: 'Header',
      data () {
        return {
          title: 'Ma Maison Connectée',
          inscription: 'Inscription'
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>