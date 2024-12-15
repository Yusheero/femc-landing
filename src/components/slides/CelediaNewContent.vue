<script setup>
import ServerRules from '../server-rules/ServerRules.vue';
import ServerDoc from '../server-doc/ServerDoc.vue';

const serverRulesData = {
  data: [
    {
      id: 1,
      title: 'Приват',
      imagePath: './src/components/server-rules/rules-item/images/shield.svg'
    },
    {
      id: 2,
      title: 'Вайп',
      imagePath: './src/components/server-rules/rules-item/images/eraser.svg'
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
  <section id="celedia-new" class="celedia-new">
    <div class="container">
      <div class="celedia-new__header">
        <img class="celedia-new__logo" src="../../assets/images/celedia-new-logo.png" alt="">
        <div class="celedia-new__description">Новый проект, направленный на актуализирование мира и версии игры. Вайп раз в год, без сброса инвентарей игроков. Всегда последняя и доступная версия игры и минимальное количество плагинов направленных на защиту игроков</div>
      </div>
      <ServerRules :rulesData="serverRulesData.data" />
      <ServerDoc />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../../style.scss';

.celedia-new {
  z-index: 1;
  height: 100vh;
  background-color: var(--main-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/images/background2.jpg');

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
    @include geologica-600;
  }
}
</style>