<template>
  <q-page>
    <q-card class="login-card">
      <q-card-section class="q-pt-none">
        <q-input v-model="email" label="Email" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="passwd" label="Password" type="password" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn color="primary" label="Login" @click="login" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useLoginStore } from "stores/login-store.js";

const email = ref("");
const passwd = ref("");

function login() {
  useLoginStore().login(email.value, passwd.value);
}
</script>
