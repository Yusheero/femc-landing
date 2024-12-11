<script setup></script>
<template>
  <div class="ip">
    <div class="ip__clipboard"><img src="../../assets/icons/clipboard.svg" alt=""></div>
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
  background: rgba(217, 217, 217, 0.30);
  backdrop-filter: blur(6px);

  &__clipboard {
    width: 18%;
    height: 100%;
    border-right: 2px solid rgba(217, 217, 217, 0.30);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: rgba(217, 217, 217, 0.596);
      cursor: pointer;
      transition: background .5s;
    }
  }

  &__text {
    width: 82%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    @include geologica-700;
    font-size: 20px;
  }
}
</style>