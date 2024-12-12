<script setup></script>
<template>
  <div class="socials">
    <ul class="socials__list">
      <li class="socials__item">
        <a class="socials__link" href="#">
          <i class="telegram-icon"></i>
        </a>
      </li>
      <li class="socials__item">
        <a class="socials__link" href="#">
          <i class="discord-icon"></i>
        </a>
      </li>
      <li class="socials__item">
        <a class="socials__link" href="#">
          <i class="vk-icon"></i>
        </a>
      </li>
      <li class="socials__item">
        <a class="socials__link" href="#">
          <i class="twitch-icon"></i>
        </a> 
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
@import '../../style.scss';

.socials {
  margin: 0;
  padding: 0;
  background: #262626;

  &__list {
    margin: 0;
    padding: 0;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__item {
    list-style: none;
    margin: 0 15px;
  }

  &__link {
    position: relative; 
    display: block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 63px;
    background: #333;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: .5s;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #ffee10;
      transition: .5s;
      transform: scale(.9);
      z-index: -1;
    }

    &:hover {
      color: #ffee10;
      box-shadow: 0 0 5px #ffee10;
      text-shadow: 0 0 5px #ffee10;
    }

    &:hover::before {
      transform: scale(1.1);
      box-shadow: 0 0 15px #ffee10;
    }
  }

  .telegram-icon {
    background-image: url("./images/aperture.svg");
  }

  .discord-icon {
    background-image: url("./images/aperture.svg");
  }

  .vk-icon {
    background-image: url("./images/aperture.svg");
  }

  .twitch-icon {
    background-image: url("./images/aperture.svg");
  }
}
</style>