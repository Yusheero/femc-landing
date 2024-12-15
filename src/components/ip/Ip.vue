<script setup>
const setClipboard = () => {
  navigator.clipboard.writeText('95.154.67.65');
}
</script>
<template>
  <div class="ip">
    <button class="ip__clipboard" @click="setClipboard"><img src="../../assets/icons/clipboard.svg" alt=""></button>
    <div class="ip__text">95.154.67.65</div>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.ip {
  width: 320px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: rgba(217, 217, 217, 0.25);
  backdrop-filter: blur(6px);

  &__clipboard {
    box-sizing: border-box;
    width: 18%;
    height: 100%;
    border-right: 2px solid rgba(217, 217, 217, 0.25);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-right: 2px solid rgba(225, 225, 225, 0.25);
    background: transparent;

    &:hover {
      background: rgba(217, 217, 217, 0.596);
      cursor: pointer;
      transition: background .1s;
    }
  }

  &__text {
    width: 82%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    user-select: none;
    @include geologica-600
  }
}
</style>