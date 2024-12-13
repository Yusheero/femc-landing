<script setup>
import Ip from '../ip/Ip.vue';
</script>
<template>
  
  <section id="main-content" class="main-content">
    <div class="panorama"></div>
    <img class="main-content__image" src="../../assets/images/main-logo.png" alt="main logo">
    <Ip />
    <p class="main-content__text">Дальневосточный комплекс серверов майнкрафт</p>
  </section>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.main-content {
  position: relative;
  z-index: 1;
  height: 100vh;
  background-color: var(--main-background);
  background-image: url('../../assets/images/background.jpg');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  &__image {
    display: block;
    z-index: 2;
    width: 512px;  
    height: auto;
    object-fit: contain;
  }

  &__text {
    width: 30%;
    z-index: 2;
    color: #fff;
    font-size: 20px;
    @include geologica-700;
    text-align: center;
  }
}

.panorama {
  position: absolute;
}
</style>