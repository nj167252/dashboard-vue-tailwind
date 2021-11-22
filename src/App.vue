<template>
<!-- eslint-disable max-len -->

    <!-- Containing Div -->
    <div class="relative w-screen h-screen bg-gray-50 flex flex-col overflow-hidden">
      <Navbar />
      <Sidebar />

      <!-- Main -->
      <div class="xl:w-4/5 lg:w-9/12 md:w-8/12 w-full ml-auto overflow-y-scroll pb-10 h-screen">
        <router-view v-slot="{ Component}">
          <component :is="Component" :key="$route.path"></component>
        </router-view>
      </div>

      <Footer/>

    </div>
</template>

<script>
import Navbar from './components/TheNavbar.vue';
import Sidebar from './components/TheSidebar.vue';
import Footer from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
