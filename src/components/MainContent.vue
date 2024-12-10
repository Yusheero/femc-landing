<script setup>
import Stats from './stats/Stats.vue';
</script>
<template>
  <section class="main-content">
    <div class="container">
      <img src="../assets/images/main-logo.png" alt="main logo">
      
      <Stats />
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../style.scss';

.main-content {
  z-index: 1;
  padding-top: 100px;
  height: 1050px;
  background-color: var(--main-background);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url('../assets/images/vczvc75.jpg');
}
</style>