<script setup>
import Advantages from './advantages/Advantages.vue';
import Stats from './stats/Stats.vue';
</script>
<template>
  <section class="main-content">
    <div class="notification">Релиз версии 1.21.3 на всех серверах! Заходи!</div>
    <div class="container">
      <div class="main-content__inner">
        <h1 class="main-content__title">Дальневосточное сообщество Minecraft</h1>
        <div class="main-content__information">
          <!-- <Advantages /> -->
          <Stats />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../style.scss';

.main-content {
  padding-top: 100px;
  height: 1050px;
  background-color: var(--main-background);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url('../assets/images/vczvc75.jpg');

  &__inner {
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    font-size: 30px;
    @include geologica-700;
  }

  &__information {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
  }

  &__title {
    font-size: 3rem;
    text-align: center;
    color: #0f0f0f;
  }
}
</style>