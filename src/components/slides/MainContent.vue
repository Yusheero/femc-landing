<script setup>
import Stats from '../stats/Stats.vue';
import Ip from '../ip/Ip.vue';
import Notification from '../notification/Notification.vue';
</script>
<template>
  <section class="main-content">
    <Notification />
    <img class="main-content__image" src="../../assets/images/main-logo.png" alt="main logo">
    <div class="main-content__info">
      <Ip />
      <Stats />
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.main-content {
  z-index: 1;
  height: 100vh;
  background-color: var(--main-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  position: relative;
  background-image: url('../../assets/images/background.jpg');

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
}
</style>