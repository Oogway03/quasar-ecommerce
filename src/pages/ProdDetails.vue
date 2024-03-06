<template>
  <ProdCard :prod="prod"> </ProdCard>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { api } from "boot/axios";
import ProdCard from "src/components/ProdCard.vue";
import { useProdStore } from "src/stores/prod-store.js";

const prod = ref({});
const id = route.params.prodId;
</script>
