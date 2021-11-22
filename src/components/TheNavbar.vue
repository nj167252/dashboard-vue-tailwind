<template>
<!-- eslint-disable max-len -->

    <!-- Header -->
    <header class="relative h-16 z-20 flex bg-white text-cw-blue-d shadow-xl">
        <!-- Header Button -->
        <button @click="changeSidebarStatus()" class="md:hidden inline-block h-full w-16 bg-transparent hover:bg-cw-blue-m transition duration-200 ease-in-out">
            <svg :class="[{'hidden' : !sidebarStatus}]" class="fill-current h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
            </svg>
            <svg :class="[{'hidden' : sidebarStatus}]" class="fill-current h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
            </svg>
        </button>
        <!-- Logo -->
        <div class="h-full py-2 md:pl-8 pl-4">
          <img class="h-full" src="../assets/CWlogo.png" alt="">
        </div>
        <!-- Header Nav Section -->
        <nav class="ml-auto flex md:pr-8 pr-0 items-center">
            <!-- Dropdown -->
            <div class="relative h-full">
                <!-- Header Button -->
                <button @click="dropdown = !dropdown" :class="[{'bg-cw-blue-l' : dropdown}]" class="h-full inline-block w-16 bg-transparent hover:bg-cw-blue-m transition duration-200 ease-in-out">
                    <svg class="fill-current h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
                </button>
                <div :class="{ 'hidden': !dropdown }" class="origin-top-right absolute right-0 mt-0 w-60 rounded-b-md shadow-lg bg-white text-cw-blue-d overflow-y-scroll ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div role="none">
                    <a href="#" class="text-gray-700 block px-4 py-3 text-sm hover:bg-cw-orange transition duration-200 ease-in-out" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                    <a href="#" class="text-gray-700 block px-4 py-3 text-sm hover:bg-cw-orange transition duration-200 ease-in-out" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                    <a href="#" class="text-gray-700 block px-4 py-3 text-sm hover:bg-cw-orange transition duration-200 ease-in-out" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                  </div>
                </div>
            </div>
            <!-- Header Button -->
            <button class="h-full inline-block w-16 bg-transparent hover:bg-cw-blue-m transition duration-200 ease-in-out">
                <svg class="fill-current h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"/>
                </svg>
            </button>
        </nav>
    </header>

</template>

<script>
export default {
  data() {
    return {
      dropdown: false,
    };
  },
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
