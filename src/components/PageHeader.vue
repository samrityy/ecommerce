<template>
  <nav class="font-sans-serif font-normal relative shadow-sm">
    <ul class="flex justify-between items-center text-md bg-custom-orange h-11">
      <li class="text-white mx-auto space-x-7">
        Online order : <a href="“tel:555-666-7777”">(210)-986-2564</a>
        <!-- <a ref="#">Online order :(210)-986- 2564</a> -->
        <a ref="#">Order Tracking</a>
      </li>
      <li class="flex text-white mx-auto">
        <p>Free worldwide shipping for above united kingdom!</p>
      </li>
      <li class="flex text-white mx-auto space-x-7">
        <a ref="#" class="mr-3">Find our search</a>
        <a href="mailto:demo@demo.com">Email now:demo@demo.com</a>
      </li>
    </ul>

    <ul class="flex justify-between items-center text-md h-24">
      <li
        class="text-black font-bold mx-auto space-x-10 mx-8 px-10 flex justify-between"
      >
        <div><a ref="#">HOME</a></div>
        <div class="dropdown">
          <button>
            COLLECTION
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </button>
          <div class="dropdown-content bg-white flex justify-between p-15">
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
        </div>
        <div><a ref="#">PRODUCT</a></div>
        <div><a ref="#">BLOG</a></div>
        <div><a ref="#">PAGES</a></div>
      </li>
      <li class="flex text-black mr-20 px-10 mb-3">
        <img class="h-12 w-35" src="..\assets\logo2.png" alt="logo" />
      </li>
      <li class="flex mx-auto space-x-10 px-5 mr-28 text-custom-grey">
        <div>
          <a ref="#">
            <font-awesome-icon :icon="['far', 'user']" class="mr-1" /> Login &
            Register
          </a>
        </div>
        <div>
          <font-awesome-icon :icon="['far', 'heart']" class="mr-1" />
          <button>My wishlist</button>
        </div>
        <div>
          <font-awesome-icon :icon="['fasl', 'bag-shopping']" class="mr-1" />
          <button @click="showDiv = true" class="btn">My cart</button>
        </div>
        <div
          v-if="showDiv"
          class="absolute z-10 bg-white w-64 h-screen right-0 top-0 shadow-lg"
        >
          <button @click="showDiv = false" class="btn text-black text-xl m-4">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </button>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { ref } from "vue";
const showDiv = ref(false);
</script>
<style scoped>
.dropdown-content {
  display: none;
  position: absolute;
  top: 100%+1px;
  left: 0;
  background-color: #fff;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.dropdown:hover .dropdown-content {
  display: flex;
}
</style>
