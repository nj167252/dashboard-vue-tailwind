<template>
<!-- eslint-disable max-len -->

<!-- Sidebar -->
  <aside :class="[{'-translate-x-64' : !sidebarStatus}]" class="absolute z-10 top-0 left-0 h-screen xl:w-1/5 lg:w-3/12 md:w-4/12 w-64 transform md:translate-x-0 transition duration-200 ease-in-out bg-white text-cw-blue-d shadow-lg overflow-y-scroll pt-16 pb-10">
    <!-- Sidebar Nav -->
    <nav class="flex flex-col pt-5">
      <!-- Sidebar Links -->
      <router-link :to="{ name: 'home' }" active-class="font-medium bg-cw-blue-l shadow-sm" class="inline-block py-2 px-8 hover:bg-cw-orange transition duration-200 ease-in-out mb-1">
        Overview
      </router-link>
      <router-link :to="{ name: 'content' }" active-class="font-medium bg-cw-blue-l shadow-sm" class="inline-block py-2 px-8 hover:bg-cw-orange transition duration-200 ease-in-out mb-1">
        Content
      </router-link>
      <router-link :to="{ name: 'projects' }" active-class="font-medium bg-cw-blue-l shadow-sm" class="inline-block py-2 px-8 hover:bg-cw-orange transition duration-200 ease-in-out mb-1">
        Projects
      </router-link>
      <router-link :to="{ name: 'resources' }" active-class="font-medium bg-cw-blue-l shadow-sm" class="inline-block py-2 px-8 hover:bg-cw-orange transition duration-200 ease-in-out mb-1">
        Resources
      </router-link>
      <router-link :to="{ name: 'notes' }" active-class="font-medium bg-cw-blue-l shadow-sm" class="inline-block py-2 px-8 hover:bg-cw-orange transition duration-200 ease-in-out mb-1">
        Notes
      </router-link>
      <router-link :to="{ name: 'pricing' }" active-class="font-medium bg-cw-blue-l shadow-sm" class="inline-block py-2 px-8 hover:bg-cw-orange transition duration-200 ease-in-out mb-1">
        Pricing
      </router-link>
      <router-link :to="{ name: 'settings' }" active-class="font-medium bg-cw-blue-l shadow-sm" class="inline-block py-2 px-8 hover:bg-cw-orange transition duration-200 ease-in-out mb-1">
        Settings
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  methods: {
    changeSidebarStatus() {
      this.$store.dispatch('sidebarStatus', !this.sidebarStatus);
    },
  },
  computed: {
    sidebarStatus() {
      return this.$store.state.sidebarStatus;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
