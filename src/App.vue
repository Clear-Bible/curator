<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
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

  <Suspense timeout="1">
    <RouterView />
  </Suspense>
  <!-- <RouterView v-slot="{ Component }"> -->
  <!--   <template v-if="Component"> -->
  <!--     <Transition mode="out-in"> -->
  <!--       <KeepAlive> -->
  <!--         <Suspense> -->
  <!-- main content -->
  <!-- <template #default> -->
  <!-- <component :is="Component"></component> -->
  <!-- </template> -->
  <!-- loading state -->
  <!-- <template #fallback> -->
  <!--   <component :is="Spinner"></component> -->
  <!-- </template> -->
  <!--         </Suspense> -->
  <!--       </KeepAlive> -->
  <!--     </Transition> -->
  <!--   </template> -->
  <!-- </RouterView> -->
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
