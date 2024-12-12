<script setup></script>
<template>
  <div class="notification">
    <img class="notification__image" src="./images/villager.jpg" alt="">
		Релиз версии 1.21.3 на всех серверах!
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.notification {
	z-index: 2;
	position: fixed;
	top: 16px;
	right: 16px;
	border-radius: 8px;
	padding: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	@include geologica-700;
	font-size: 16px;
	color: #fff;
	background: linear-gradient(149deg, rgb(255, 81, 0) 0%, rgb(255, 145, 0) 42%, rgb(250, 138, 86) 72%, rgb(255, 255, 255) 100%);
	animation: background 5s infinite linear; // 10s - скорость анимации
	background-size: 200%; // Можно менять и подбирать интенсивность

	@keyframes notification {
    0% {
        background-position: 80% 0%;
    }
    50% {
        background-position: 20% 100%;
    }
    100% {
        background-position: 80% 0%;
    }
	}

	&__image {
		width: 30px;
	}
}
</style>