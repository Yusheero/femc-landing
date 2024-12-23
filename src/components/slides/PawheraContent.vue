<script setup>
import ServerRules from '../server-rules/ServerRules.vue';
import ServerDoc from '../server-doc/ServerDoc.vue';

const serverRulesData = {
  data: [
    {
      id: 1,
      title: 'Анархия',
      imagePath: './src/components/server-rules/rules-item/images/swords.svg'
    },
    {
      id: 2,
      title: 'Без вайпа',
      imagePath: './src/components/server-rules/rules-item/images/leaf.svg'
    },
    {
      id: 3,
      title: 'Актуальный',
      imagePath: './src/components/server-rules/rules-item/images/candy.svg'
    }
  ]
}
</script>
<template>
  <section id="pawhera" class="pawhera">
    <div class="container">
      <div class="pawhera__header">
        <img class="pawhera__logo" src="../../assets/images/pawhera-logo.png" alt="">
        <div class="pawhera__description">На сервере действую только те правила, которые защищают стабильную работу сервера</div>
      </div>
      <ServerRules :rulesData="serverRulesData.data" />
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
    width: 700px;
  }

  &__description {
    width: 60%;
    line-height: 28px;
    color: #fff;
    font-size: 20px;
    @include rubik-600;
  }
}
</style>