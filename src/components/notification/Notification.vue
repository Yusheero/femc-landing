<script setup>
function removeElement() {
	const element = document.getElementById("notification");
	element.remove();
}
</script>
<template>
  <div id="notification" class="notification">
		<div class="notification__inner">
			<img class="notification__image" src="./images/villager.jpg" alt="">
			<div class="notification__text">Релиз версии 1.21.3 на всех серверах!</div>
		</div>
		<button class="notification__button" @click="removeElement"><img src="./images/x.svg" alt=""></button>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.notification {
	height: 50px;
	z-index: 2;
	position: fixed;
	top: 16px;
	right: 16px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	padding-left: 16px;
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

	&__inner {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 16px;
		user-select: none; 
	}

	&__image {
		width: 30px;
	}

	&__button {
		height: 100%;
		width: 50px;
		background: transparent;
		border: none;
		border-left: 2px solid #fff;

		&:hover {
			border-top-right-radius: 8px;
			border-bottom-right-radius: 8px;
			cursor: pointer;
			background-color: #ff6d24;
		}
	}
}
</style>