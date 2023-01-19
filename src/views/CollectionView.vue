<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import queries from "../data/queries";
import Spinner from "../components/Spinner.vue";

const error = ref(false);
const loading = ref(false);

const route = useRoute();
const router = useRouter();

let collection = null;

const loadCollection = async (id) => {
  console.log("Loading collection...");
  try {
    loading.value = true;
    console.log("loading?", loading.value);
    collection = await queries.local.getCollection(id);
    loading.value = false;
  } catch (err) {
    console.log("catch");
    loading.value = false;
    error.value = true;
  }
};

await loadCollection(route.params.id);

const reloadPage = () => {
  router.go(0);
};
</script>

<template>
  <template v-if="error">
    <div class="error">
      <h1>Apologies!</h1>
      <p>
        Something
        <span class="error-message">went wrong</span>
        loading data for this collection. The error appears to be:
      </p>
      <button @click="reloadPage">Try Again</button>
    </div>
  </template>

  <template v-if="loading">
    <p>Loading...</p>
  </template>

  <template v-if="!error && !loading">
    <h1>The {{ collection.name }} collection</h1>

    <ul>
      <li>id: {{ route.params.id }}</li>
      <li>name: {{ collection.name }}</li>
      <li>count: {{ collection.itemCount }}</li>
    </ul>
  </template>
</template>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error button {
  margin-top: 16px;
}

.error-message {
  color: red;
}
</style>
