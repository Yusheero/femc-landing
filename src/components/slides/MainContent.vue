<script setup>
import Ip from '../ip/Ip.vue';

const text = 'FEMC - Это сервер созданный с любовью и теплом дальнего востока, который вмещает в себя все лучшие аспекты игры, которые помогут вам получить максимально приятные ощущения от игры на нашем проекте! Мы нацелены на развитие дальневосточное комьюнити, и будем рады если вы станете частью нашей семьи! <3'
</script>
<template>
  <section id="main-content" class="main-content">
    <div class="panorama"></div>
    <img class="main-content__image" src="../../assets/images/femc-logo.png" alt="main logo">
    <div class="main-content__info">
      <Ip />
      <p class="main-content__text">{{ text }}</p>
    </div>
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

  &__info {
    width: 877px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  &__text {
    width: 700px;
    z-index: 2;
    color: #ffffff;
    font-size: 20px;
    @include rubik-700;
    text-align: center;
    user-select: none;
    line-height: 1.20;
  }
}

.panorama {
  position: absolute;
}
</style>