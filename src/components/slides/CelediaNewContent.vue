<script setup>
import ServerRules from '../server-rules/ServerRules.vue';

</script>
<template>
  <section id="celedia-new" class="celedia-new">
    <div class="container">
      <img class="celedia-new__logo" src="../../assets/images/celedia-new-logo.png" alt="">
      <div class="celedia-new__description">Celedia - это один из наших прекрасных сверверов, где вы сможете насладиться игрой как в одиночку, так и с друзьями! Как и остальные наши сервера Celedia обладает своими уникальными особенностями и механиками, приносящими в вашу игру новый опыт и особенности!</div>
      <ServerRules />
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

  &__logo {
    width: 500px;
  }

  &__description {
    width: 60%;
    color: #fff;
    font-size: 20px;
    @include geologica-600;
  }
}
</style>