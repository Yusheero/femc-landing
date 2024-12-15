<script setup>
import ServerDoc from '../server-doc/ServerDoc.vue';
import ServerRules from '../server-rules/ServerRules.vue';

const serverRulesData = {
  data: [
    {
      id: 1,
      title: 'Приват',
      imagePath: './src/components/server-rules/rules-item/images/shield.svg'
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
  <section id="celedia-old" class="celedia-old">
    <div class="container">
      <div class="celedia-old__header">
        <img class="celedia-old__logo" src="../../assets/images/celedia-old-logo.png" alt="">
        <div class="celedia-old__description">Новый проект, направленный на актуализирование мира и версии игры. Всегда последняя и доступная версия игры и минимальное количество плагинов направленных на защиту игроков</div>
      </div>
      <ServerRules :rulesData="serverRulesData.data" />
      <ServerDoc />
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.celedia-old {
  z-index: 1;
  height: 100vh;
  background-color: var(--main-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/images/background3.jpg');
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
    @include geologica-600;
  }
}
</style>