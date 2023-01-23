<script setup>
import CollectionCard from "./CollectionCard.vue";
import queries from "../data/queries";

// const collections = [
//   { id: 1, name: "SIL", itemCount: 22 },
//   { id: 2, name: "Museum of the Bible", itemCount: 42 },
//   { id: 3, name: "UBS", itemCount: 3 },
//   { id: 4, name: "unfoldingWord", itemCount: 7 },
// ];

const collections = await queries.local.getCollections();
</script>

<template>
  <div class="collections-grid">
    <div
      v-for="collection in collections"
      :key="collection.id"
      class="collection-container"
    >
      <CollectionCard :collection="collection" />
    </div>
  </div>
</template>

<style scoped>
.collections-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}

.collection-container {
  flex: 1;
  aspect-ratio: 1 / 1;
  min-width: 275px;
}
</style>
