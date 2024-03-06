<template>
  <q-card class="my-card">
    <img class="" src="https://cdn.quasar.dev/img/mountains.jpg" />
    <div>
      <q-card-section>
        <div class="text-h6">{{ prod.name }}</div>
        <!-- <div class="text-subtitle2">by John Doe</div> -->
      </q-card-section>

      <q-card-section>
        {{ prod.desc }}
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2">{{ prod.price }}€, Qty:{{ prod.qty }}</div>
      </q-card-section>
      <q-card-section class="q-pt">
        <q-card-actions horizontal class="justify-around">
          <q-btn color="primary" label="Edit" />
          <q-btn color="secondary" @click="click" label="Delete" />
        </q-card-actions>
      </q-card-section>
    </div>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  prod: Object,
  click: Function,
});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-height: 500px;
  margin-bottom: 10px;
  display: flex;
}

img {
  max-width: 350px;
}
</style>
