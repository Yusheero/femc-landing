<script setup>
// const setClipboard = () => {
//   navigator.clipboard.writeText('95.154.67.65');
// }
</script>
<template>
  <div class="ip">
    <!-- <button class="ip__clipboard" @click="setClipboard"><img src="../../assets/icons/frame.png" alt=""></button> -->
    <div class="ip__text">95.154.67.65</div>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.ip {
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: rgba(61, 61, 61, 50%);
  backdrop-filter: blur(6px);
  height: 50px;
  width: 230px;

  &__clipboard {
    box-sizing: border-box;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;

    &:hover {
      cursor: pointer;
    }
  }

  &__text {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    @include minecraft;
  }
}
</style>