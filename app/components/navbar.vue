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
      'fixed top-0 left-0 w-full justify-center z-50 transition-all duration-300',
      isScroll
        ? 'backdrop-blur-lg bg-opacity-80 shadow-lg bg-onyx'
        : 'bg-opacity-100 shadow-none bg-transparent',
    ]"
  >
    <div class="flex justify-between py-5 lg:py-6 px-4 md:px-6 lg:px-12">
      <a
        href="/"
        class="text-2xl md:text-2xl font-bold flex text-brass items-center select-none"
        >Freyana.</a
      >

      <Teleport to="body">
        <Transition
          enter-active-class="transition ease-out duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition ease-in duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="sidebarOpen"
            class="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:backdrop-blur-none"
            @click="closeSidebar"
          ></div>
        </Transition>

        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="-translate-x-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="-translate-x-0"
          leave-to-class="translate-x-full"
        >
          <aside
            v-if="sidebarOpen"
            class="fixed top-0 right-0 w-[85%] h-full bg-obsidian z-[70] shadow-2xl px-4 py-5 border-r border-white/20 lg:hidden"
          >
            <div class="flex justify-between items-center mb-16">
              <a href="/" class="text-2xl md:text-2xl font-bold text-brass"
                >Freyana.</a
              >
              <button @click="closeSidebar" class="text-parchment">
                <Icon name="mdi:close" class="text-4xl" />
              </button>
            </div>

            <nav
              class="flex flex-col gap-6 px-3 items-end text-lg font-medium text-parchment"
            >
              <NuxtLink
                @click="closeSidebar"
                to="/"
                class=""
                exact-active-class="text-brass font-semibold"
                >Beranda</NuxtLink
              >
              <NuxtLink
                @click="closeSidebar"
                to="/biodata"
                class=""
                exact-active-class="text-brass font-semibold"
                >Biodata</NuxtLink
              >
              <NuxtLink
                @click="closeSidebar"
                to="/perjalanan"
                class=""
                exact-active-class="text-brass font-semibold"
                >Perjalanan</NuxtLink
              >
              <NuxtLink
                @click="closeSidebar"
                to="/galeri"
                class=""
                exact-active-class="text-brass font-semibold"
                >Galeri</NuxtLink
              >
              <NuxtLink
                @click="closeSidebar"
                to="/kontak"
                class=""
                exact-active-class="text-brass font-semibold"
                >Kontak</NuxtLink
              >
            </nav>
          </aside>
        </Transition>
      </Teleport>

      <button @click="toogleSidebar" class="lg:hidden">
        <Icon name="mdi:menu" class="text-4xl text-white" />
      </button>

      <div class="hidden lg:flex">
        <ul
          class="flex space-x-8 h-full items-center text-base lg:text-lg font-medium text-parchment/60"
        >
          <li>
            <NuxtLink
              to="/"
              class="relative cursor-pointer group transition-colors pb-1 hover:text-parchment"
              >Beranda
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full bg-parchment"
              ></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="relative cursor-pointer group transition-colors pb-1 hover:text-parchment"
              >Biodata
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full bg-parchment"
              ></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="relative cursor-pointer group transition-colors pb-1 hover:text-parchment"
              >Perjalanan
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full bg-parchment"
              ></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="relative cursor-pointer group transition-colors pb-1 hover:text-parchment"
              >Galeri
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full bg-parchment"
              ></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="relative cursor-pointer group transition-colors pb-1 hover:text-parchment"
              >Kontak
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full bg-parchment"
              ></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>