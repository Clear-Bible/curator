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
      <div class="card-name">
        {{ props.collection.name }}
        <div>
          <div class="card-count">{{ props.collection.itemCount }} items</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collection-card {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.card-image {
  width: 100%;
  display: block;
  border-radius: 8px;
}

.card-description {
  margin-top: 8px;
  padding-right: 4px;
  text-align: right;
}

.card-count {
  font-size: 12px;
}
</style>
