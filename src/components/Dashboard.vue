<template>
<!-- eslint-disable max-len -->

    <!-- Containing Div -->
    <div class="relative w-screen h-screen bg-gray-50 flex flex-col overflow-hidden">
      <Navbar />
      <Sidebar />

      <!-- Main -->
      <main class="xl:w-4/5 lg:w-9/12 md:w-8/12 w-full ml-auto overflow-y-scroll pb-10 h-screen">
        <!-- <Alerts>
            <template v-slot:alerts>
            </template>
        </Alerts> -->
        <slot name="main">
          <section class="pt-5 px-8 h-full flex flex-col items-center justify-center gap-x-0.5">
            <img src="../assets/exclaination.png" alt="">
            <p class="text-gray-700 font-light mb-5">Oh dang! Something has gone wrong here...</p>
          </section>
        </slot>
      </main>

      <Footer/>

    </div>
</template>

<script>
import Navbar from './TheNavbar.vue';
import Sidebar from './TheSidebar.vue';
import Footer from './TheFooter.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
};
</script>

<style>

</style>
