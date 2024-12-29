<script setup>
import Documentation from '@/components/documentation/Documentation.vue';
import Ip from '@/components/ip/Ip.vue';

const text = 'Сервер созданный с любовью и теплом дальнего востока, который вмещает в себя все лучшие аспекты игры. Мы нацелены на развитие дальневосточное комьюнити, и будем рады если вы станете частью нашей семьи!'
</script>
<template>
  <section id="main-content" class="main-content">
    <div v-if="true" class="panorama"></div>
    <img class="main-content__image" src="../../assets/images/femc-logo.png" alt="main logo">
    <div class="main-content__info">
      <div class="main-content__info-header">
        <Ip />
        <Documentation :text="true" />
      </div>
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
    gap: 40px;
  }

  &__info-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  &__text {
    width: 900px;
    z-index: 2;
    color: #ffffff;
    font-size: 24px;
    @include minecraft;
    text-align: center;
    user-select: none;
    line-height: 1.20;
  }
}

.panorama {
  position: absolute;
}
</style>