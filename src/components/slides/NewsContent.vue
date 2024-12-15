<script setup>
import NewsCards from '../news-cards/NewsCards.vue';
</script>
<template>
  <section id="news" class="news-content">
    <div class="news-content__container">
      <img class="news-content__logo" src="../../assets/images/news-logo.png" alt="">
      <NewsCards />
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.news-content {
  z-index: 1;
  height: 100vh;
  background-color: var(--main-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  background-image: url('../../assets/images/background.jpg');
  @include geologica-700;

  &__container {
    width: 85%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 42px;
  }

  &__logo {
    width: 350px;
  }
}

.block {
  @include geologica-700;
  color: #fff;
  background: rgba(217, 217, 217, 0.50);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  &__title {
    font-size: 26px;
  }

  &__subtitle {
    color: #b80000;
    font-size: 18px;
  }
}
</style>