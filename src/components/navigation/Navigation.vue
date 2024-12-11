<script setup></script>
<template>
  <div class="navigation">
    <a href="#main-content" class="navigation__item"><img class="navigation__image" src="../../assets/icons/iron.png" alt=""></a>
    <a href="#celedia-new" class="navigation__item"><img class="navigation__image" src="../../assets/icons/powder.png" alt=""></a>
    <a href="#celedia-old" class="navigation__item"><img class="navigation__image" src="../../assets/icons/powder.png" alt=""></a>
    <a href="#pawhera" class="navigation__item"><img class="navigation__image" src="./images/pawhera-icon.png" alt=""></a>
    <a href="#news" class="navigation__item"><img class="navigation__image" src="../../assets/icons/powder.png" alt=""></a>
    <a href="#play" class="navigation__item"><img class="navigation__image" src="../../assets/icons/powder.png" alt=""></a>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.navigation {
  z-index: 2;
	position: fixed;
	left: 20px;
  top: calc(50vh - 208px);
  background: rgba(217, 217, 217, 0.50);
  backdrop-filter: blur(6px);
	border-radius: 8px;
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 16px;
	@include geologica-700;
  padding: 12px;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: #A7A7A7;
    border-radius: 8px;
    border: none;

    &:hover {
      background: #383838;
      transition: background .5s;
    }
  }

  &__image {
    width: 30px;
    height: 25px;
  }
}
</style>