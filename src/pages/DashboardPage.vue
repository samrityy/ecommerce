<template>
  <PageHeader />
  <div class="bg-cover" style="background-image: url('bg1.jpg'); height: 800px">
    <div class="container w-full h-full mx-auto">
      <div class="flex flex-col w-1/2">
        <h1 class="text-6xl font-bold text-black mb-6 w-1/2 pt-24 mt-12">
          Every dog has its every day
        </h1>
        <p class="text-lg text-black mb-4 w-1/2">
          We've all heard people who say that pets are animals,as though somehow
          they're in our lives people have likely never owen a loyan dog !
        </p>
        <p class="text-xl my-5 font-bold">
          Starting rate: <span class="text-custom-orange">$70.00</span>
        </p>
        <button
          class="bg-custom-orange hover:bg-blue-700 text-white font-bold py-2 px-4 w-48 h-16 rounded-lg transition-colors"
        >
          SHOP ONLINE
        </button>
      </div>
    </div>
    <div class="container w-full h-full mx-auto">
      <PageFooter />
    </div>
  </div>
  <CollectionComponrent />
</template>
<script setup>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import CollectionComponrent from "@/components/CollectionComponrent.vue";
</script>
