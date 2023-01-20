<script setup>
import { ref, reactive, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import queries from "../data/queries";
import Spinner from "../components/Spinner.vue";

const isErrored = ref(false);
const isLoading = ref(false);
const errorMessage = ref(null);

const route = useRoute();
const router = useRouter();

const collection = reactive({});

isLoading.value = true;

nextTick().then(() => {
  queries.local
    .getCollection(route.params.id)
    .then((result) => {
      collection.value = result;
      isLoading.value = false;
    })
    .catch((error) => {
      isLoading.value = false;
      isErrored.value = true;
      errorMessage.value = error;
    });
});

const reloadPage = () => {
  router.go(0);
};
</script>

<template>
  <template v-if="isErrored">
    <div class="error">
      <h1>Apologies!</h1>
      <p>
        Something
        <span class="error-message">went wrong</span>
        loading data for this collection. The error appears to be:
      </p>
      <p>{{ errorMessage }}</p>
      <button @click="reloadPage">Try Again</button>
    </div>
  </template>

  <template v-if="isLoading">
    <Spinner />
  </template>

  <template v-if="!isErrored && !isLoading && collection.value.id">
    <h1>The {{ collection.value.name }} collection</h1>

    <ul>
      <li>id: {{ collection.value.id }}</li>
      <li>name: {{ collection.value.name }}</li>
      <li>count: {{ collection.value.itemCount }}</li>
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
