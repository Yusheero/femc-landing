<script setup>
import { ref, onMounted } from 'vue';
import KeenSlider from 'keen-slider';
import slide1 from './images/1.jpg'
import slide2 from './images/2.jpg'
import slide3 from './images/3.jpg'
import slide4 from './images/4.jpg'
import slide5 from './images/5.jpg'
import slide6 from './images/5.jpg'
import slide7 from './images/5.jpg'

const sliderRef = ref(null);
const slides = ref([slide1, slide2, slide3, slide4, slide5, slide6, slide7]);
let slider;

onMounted(() => {
  slider = new KeenSlider(sliderRef.value, {
    slides: {
      perView: 5,
      spacing: 10,
    },
  });
});
</script>

<template>
  <div ref="sliderRef" class="keen-slider">
    <div class="keen-slider__slide" v-for="(slide, index) in slides" :key="index">
      <img class="slider-image" :src="slide" alt="">
    </div>
  </div>
</template>

<style>
.keen-slider {
  width: 100%;
  height: 600px; /* Высота слайдера */
}

.keen-slider__slide {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Цвет текста */
  font-size: 20px; /* Размер шрифта */
}

.slider-image {
  width: 300px;
}
</style>
