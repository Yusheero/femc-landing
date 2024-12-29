<script setup>
import ServerRules from '../server-rules/ServerRules.vue';
import Documentation from '../documentation/Documentation.vue';

const serverRulesData = {
  data: [
    {
      id: 1,
      title: 'Нет привата',
      text: 'Кроме спавна ничего не запривачено',
      imagePath: './src/components/server-rules/rules-item/images/item.png'
    },
    {
      id: 2,
      title: 'Вайп',
      text: 'Вайп карты и инвентарей раз в год',
      imagePath: './src/components/server-rules/rules-item/images/item2.jpg'
    },
    {
      id: 3,
      title: 'Актуальный',
      text: 'Всегда актуальная версия доступная для плагинов',
      imagePath: './src/components/server-rules/rules-item/images/item.png'
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
      <Documentation :text="true" />
      <ServerRules :rulesData="serverRulesData.data" />
      <div class="celedia-new__builds">
        <h2 class="celedia-new__builds-text">Постройки наших игроков</h2>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../../style.scss';

.celedia-new {
  z-index: 1;
  height: 100vh;
  background-color: rgb(29, 29, 29);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/images/celedia-new-background.jpg');
  background-repeat: no-repeat;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 32px;
  }

  &__logo {
    width: 800px;
  }

  &__description {
    width: 60%;
    line-height: 28px;
    color: #fff;
    font-size: 18px;
    @include minecraft;
  }

  &__builds-text {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    @include minecraft;
  }
}
</style>