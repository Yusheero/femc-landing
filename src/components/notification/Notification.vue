<script setup>
function removeElement() {
	const element = document.getElementById("notification");
	element.remove();
}
</script>
<template>
  <div id="notification" class="notification">
			<img class="notification__image" src="./images/notification.png" alt="">
			<div class="notification__text">
				<div class="notification__header">
					<div class="notification__title">Новая версия на серверах</div>
					<div class="notification__date">09.01.2025</div>
				</div>
				<div class="notification__subtitle">Релиз версии 1.21.3 на всех серверах!</div>
			</div>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.notification {
	height: 50px;
	z-index: 2;
	position: fixed;
	bottom: 16px;
	right: 16px;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	padding: 16px;
	@include rubik-700;
	font-size: 16px;
	color: #fff;
	background: rgb(61, 61, 61, 50%);
	backdrop-filter: blur(6px);

	&__text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		gap: 8px;
	}

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 32px;
	}

	&__title {
		font-size: 20px;
	}

	&__date {
		font-size: 16px;
		@include rubik-500;
	}

	&__subtitle {
		font-size: 16px;
		@include rubik-500;
	}
}
</style>