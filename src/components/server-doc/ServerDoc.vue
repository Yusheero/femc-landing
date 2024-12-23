<script setup>

</script>
<template>
  <div class="server-doc">
    <button class="server-doc__button">
      <h3 class="server-doc__title">Документация сервера</h3>
      <img src="./images/external-link.svg" alt="external-link">
    </button>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.server-doc {
  &__title {
    font-size: 16px;
  }

  &__button {
    background: rgba(217, 217, 217, 0.30);
    backdrop-filter: blur(8px);
    padding: 16px;
    border: none;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    @include rubik-600;
    color: #fff;

    &:hover {
      background: rgba(217, 217, 217, 0.596);
      cursor: pointer;
      transition: background .1s;
    }
  }
}
</style>