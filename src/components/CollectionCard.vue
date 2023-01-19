<script setup>
const props = defineProps({
  collection: Object,
});
</script>

<template>
  <div class="collection-card">
    <div>
      <img class="card-image" />
    </div>

    <div class="card-description">
      <span>
        {{ props.collection.name }}
      </span>

      <span> ( {{ props.collection.itemCount }} ) </span>
    </div>
  </div>
</template>

<style scoped>
.collection-card {
  width: 100%;
}

.card-image {
  width: 100%;
  display: block;
}
</style>
