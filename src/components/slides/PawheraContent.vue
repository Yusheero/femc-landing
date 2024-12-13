<script setup>
import ServerRules from '../server-rules/ServerRules.vue';
import ServerDoc from '../server-doc/ServerDoc.vue';

const titles = {
  1: 'Анархия',
  2: 'Без вайпа',
  3: 'Актуальный',
};
</script>
<template>
  <section id="pawhera" class="pawhera">
    <div class="container">
      <div class="pawhera__header">
        <img class="pawhera__logo" src="../../assets/images/pawhera-logo.png" alt="">
        <div class="pawhera__description">На сервере действую только те правила, которые защищают стабильную работу сервера</div>
      </div>
      <ServerRules :titles="titles" />
      <ServerDoc />
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.pawhera {
  z-index: 1;
  height: 100vh;
  background-color: var(--main-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/images/background4.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 24px;
  }

  &__logo {
    width: 600px;
  }

  &__description {
    width: 60%;
    line-height: 28px;
    color: #fff;
    font-size: 20px;
    @include geologica-600;
  }
}
</style>