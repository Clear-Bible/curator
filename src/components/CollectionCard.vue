<script setup>
const props = defineProps({
  collection: Object,
});
</script>

<template>
  <div class="collection-card">
    <div>
      <RouterLink
        :to="{ name: 'collection', params: { id: props.collection.id } }"
      >
        <img class="card-image" src="https://via.placeholder.com/450" />
      </RouterLink>
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
