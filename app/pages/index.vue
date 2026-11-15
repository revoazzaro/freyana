<template>
  <section class="relative w-full h-dvh overflow-hidden">
    <div
      class="absolute inset-0 bg-[url('https://res.cloudinary.com/daxdlio4e/image/upload/v1794204865/quality_restoration_20261109131038529_v9mze1.jpg')] md:bg-[url('https://res.cloudinary.com/daxdlio4e/image/upload/v1794204860/quality_restoration_20261109131107325_ywei3p.jpg')] bg-cover bg-top brightness-[.30] z-0"
    ></div>
    <div
      class="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent pointer-events-none z-[1]"
    ></div>
    <div
      class="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 max-w-6xl mx-auto"
    >
      <span
        class="text-brass font-bold text-base md:text-lg lg:text-xl tracking-wider selection:bg-brass selection:text-parchment"
      >
        Freya Jayawardana's Journey
      </span>
      <h1
        class="text-parchment font-bold text-2xl md:text-4xl lg:text-5xl selection:bg-brass"
      >
        Gadis Koleris <br />
        Yang Suka Berimajinasi, <br />
        Terangi Harimu <br />
        Dengan Senyum Karamelku.
      </h1>
      <div class="flex flex-row gap-3 mt-3 md:mt-4">
        <div
          class="flex bg-brass border-brass border-2 rounded-lg items-center cursor-pointer"
        >
          <NuxtLink
            class="px-3 py-2 text-sm md:text-lg font-semibold text-onyx"
          >
            Profil Freya
          </NuxtLink>
        </div>
        <div
          class="flex border-brass border-2 hover:bg-brass group rounded-lg items-center transition-all duration-300 cursor-pointer"
        >
          <NuxtLink
            class="px-3 py-2 text-sm md:text-lg font-semibold text-brass group-hover:text-onyx transition-all duration-300"
          >
            Perjalanan Freya
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
