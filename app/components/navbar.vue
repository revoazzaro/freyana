<script setup>
const sidebarOpen = ref(false);

const toogleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const closeSidebar = () => {
  sidebarOpen.value = false;
};

useHead({
  bodyAttrs: {
    class: computed(() => (sidebarOpen.value ? "overflow-hidden" : "")),
  },
});

const route = useRoute();
const isScroll = ref(false);

const pathHome = computed(() => {
  return route.path === "/";
});

const handleScroll = () => {
  isScroll.value = window.scrollY > 30;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full justify-center z-50 transition-all duration-300 border-b-[1px] border-brass bg-onyx',
      isScroll ? 'block' : 'hidden',
    ]"
  >
    <div class="flex py-3 lg:py-4 px-5 md:px-6 lg:px-8 justify-center">
      <a href="/" class="text-2xl md:text-2xl font-bold text-brass">Freyana.</a>
    </div>
  </nav>
</template>