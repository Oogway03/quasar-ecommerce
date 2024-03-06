<template>
  <div v-for="item in prods" :key="item.id">
    <ProdCard :prod="item" :click="onClickProd"> </ProdCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProdStore } from "stores/prod-store";
import ProdCard from "src/components/ProdCard.vue";

const prods = ref("");
const query = async () => {
  prods.value = await useProdStore().getProd();
};

async function onClickProd() {
  await useProdStore().setProd("nome", "desc", 3, 3.5);
}
onMounted(query);
</script>
