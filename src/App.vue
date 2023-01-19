<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="site-title">
      <RouterLink to="/">ClearCurator</RouterLink>
    </div>

    <div>
      <nav class="header-nav">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.site-title {
  font-size: 24px;
}

nav.header-nav {
  display: flex;
  gap: 16px;
}
/* @media (min-width: 1024px) { */
/*   header { */
/*     display: flex; */
/*     place-items: center; */
/*     padding-right: calc(var(--section-gap) / 2); */
/*   } */

/*   .logo { */
/*     margin: 0 2rem 0 0; */
/*   } */

/*   header .wrapper { */
/*     display: flex; */
/*     place-items: flex-start; */
/*     flex-wrap: wrap; */
/*   } */

/*   nav { */
/*     text-align: left; */
/*     margin-left: -1rem; */
/*     font-size: 1rem; */

/*     padding: 1rem 0; */
/*     margin-top: 1rem; */
/*   } */
/* } */
</style>
