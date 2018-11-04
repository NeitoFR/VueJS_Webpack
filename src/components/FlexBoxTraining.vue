<template>
    <div>
        <div class="flex flex--col">
            <div class="box flex__item--top flex flex--col flex--justify">
                <div class="box flex__item--top"></div>
                <div class="box flex__item--bottom"></div>
                <div class="box flex__item flex flex--row">
                <div class="box flex__item"></div>
                <div class="box flex__item"></div>
                <div class="box flex__item"></div>
                </div>
                <div class="box flex__item--middle"></div>
            </div>
            <div class="box flex__item--top"></div>
            <div class="box flex__item--top"></div>
            <div class="box flex__item--top"></div>
            <div class="box flex__item--top"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  min-height: 50px;
  min-width: 50px;
  margin: 5px;
  border: 1px solid black;
  background-color: aqua;
}
</style>
