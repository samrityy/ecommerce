<template>
  <nav class="font-sans-serif font-normal relative shadow-sm">
    <ul class="flex justify-between items-center text-md bg-custom-orange h-11">
      <li class="text-white mx-auto space-x-7">
        <a ref="#">Online order :(210)-986- 2564</a>
        <a ref="#">Order Tracking</a>
      </li>
      <li class="flex text-white mx-auto">
        <p>Free worldwide shipping for above united kingdom!</p>
      </li>
      <li class="flex text-white mx-auto space-x-7">
        <a ref="#">Find our search</a>
        <p>Email now :demo@demo.com</p>
      </li>
    </ul>

    <ul class="flex justify-between items-center text-md h-24">
      <li class="text-black font-bold mx-auto space-x-10 mx-8 px-10">
        <a ref="#">HOME</a>
        <!-- <a ref="#" >COLLECTION</a> -->
        <button
          @mouseover="showDiv = true"
          @mouseout="showDiv = false"
          class="btn"
        >
          COLLECTION
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </button>
        <div
          v-if="showDiv"
          class="absolute w-full right-0 top-full bg-white flex justify-between px-32 py-10"
        >
          <div>
            <ul class="space-y-5">
              <li class="font-bold">Golden retriever</li>
              <li>Chickpea 150g</li>
              <li>Fresh almonds</li>
              <li>Natural coriander</li>
              <li>Pure mug dal</li>
              <li>Saffron spice still</li>
              <li>Healthy walnut</li>
            </ul>
          </div>
          <div>
            <ul class="space-y-5">
              <li class="font-bold">Siamese cats</li>
              <li>Healthy walnut</li>
              <li>Juglans walnuts</li>
              <li>Pure mug dal</li>
              <li>Chickpea 150g</li>
              <li>Green moong dal</li>
              <li>Natural coriander</li>
            </ul>
          </div>
          <div>
            <img class="rounded-xl" src="..\assets\img_1.png" alt="logo" />
          </div>
          <div>
            <img class="rounded-xl" src="..\assets\img_1.png" alt="logo" />
          </div>
        </div>
        <a ref="#">PRODUCT</a>
        <a ref="#">BLOG</a>
        <a ref="#">PAGES</a>
      </li>
      <li class="flex text-black mr-20 px-10">
        <img class="h-12 w-35" src="..\assets\logo2.png" alt="logo" />
      </li>
      <li class="flex mx-auto space-x-10 px-5 mr-28 text-custom-grey">
        <a ref="#">
          <font-awesome-icon :icon="['far', 'user']" class="mr-1" /> Login &
          Register
        </a>
        <a ref="#">
          <font-awesome-icon :icon="['far', 'heart']" class="mr-1" /> My
          wishlist</a
        >
        <a ref="#">
          <font-awesome-icon :icon="['fasl', 'bag-shopping']" class="mr-1" /> My
          Cart</a
        >
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { ref } from "vue";
// import CollectionComponrent from './CollectionComponrent.vue';

const showDiv = ref(false);
</script>

<!-- <style scoped>
.hover-div {
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid black;
  background-color: #f9f9f9;
  /* padding: 8px; */
  z-index: 1;
  width: 100%;
}
</style> -->
