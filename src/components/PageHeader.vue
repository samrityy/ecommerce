
<template>
  <nav class="font-sans-serif font-normal">
    <ul class="flex justify-between items-center text-md bg-custom-orange h-11">
      <li class="text-white mx-auto space-x-7">
        <a ref="#">Online order :(210)-986- 2564</a>
        <a ref="#">Order Tracking</a>
      </li>
      <li class=" flex text-white mx-auto">
        <p>Free worldwide shipping for above united kingdom!</p>
      </li>
      <li class=" flex text-white mx-auto space-x-7">
        <a ref="#" >Find our search</a>
        <p>Email now :demo@demo.com</p>
      </li>
    </ul>

    <ul class="flex justify-between items-center text-md h-24">
      <li class="text-black font-bold mx-auto space-x-10 mx-12 px-10 ">
        <a ref="#" >HOME</a>
        <a ref="#" >COLLECTION</a>
        <a ref="#" >PRODUCT</a>
        <a ref="#" >BLOG</a>
        <a ref="#" >PAGES</a>
      </li>
      <li class=" flex text-black mr-20 px-10">
        <img class="h-12 w-35" src="..\assets\logo2.png" alt="logo">
      </li>
      <li class=" flex text-black mx-auto space-x-10 px-5 mr-28 text-custom-grey">
        <a ref="#" > <font-awesome-icon :icon="['far', 'user']" class="mr-1 "/> Login & Register </a>
        <a ref="#" > <font-awesome-icon :icon="['far', 'heart']" class="mr-1" /> My wishlist</a>
        <a ref="#" > <font-awesome-icon :icon="['fasl', 'bag-shopping']" class="mr-1" /> My Cart</a>
      </li>
    </ul>
  </nav>
  
</template>
