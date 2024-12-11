<script setup>
import Ip from '../ip/Ip.vue';
</script>
<template>
  <section id="play" class="play-content">
    <Ip />
  </section>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.play-content {
  z-index: 1;
  height: 100vh;
  background-color: var(--main-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  background-image: url('../../assets/images/background.jpg');
}
</style>