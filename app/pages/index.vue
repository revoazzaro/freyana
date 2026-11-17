<script setup lang="ts">
import IconInstagram from "~/components/iconInstagram.vue";
import IconTiktok from "~/components/iconTiktok.vue";
import IconTwitter from "~/components/iconTwitter.vue";
</script>

<template>
  <section id="Beranda" class="relative w-full h-screen overflow-hidden">
    <div
      class="absolute inset-0 bg-[url('https://res.cloudinary.com/daxdlio4e/image/upload/v1794204865/quality_restoration_20261109131038529_v9mze1.jpg')] md:bg-[url('https://res.cloudinary.com/daxdlio4e/image/upload/v1794204860/quality_restoration_20261109131107325_ywei3p.jpg')] bg-cover bg-top brightness-[.30] z-0"
    ></div>
    <div
      class="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent pointer-events-none z-[1]"
    ></div>
    <div
      class="relative z-10 gap-1 flex flex-col justify-center h-full px-6 md:px-12 max-w-6xl mx-auto"
    >
      <span
        class="text-brass font-bold text-base md:text-lg lg:text-xl tracking-wider selection:bg-brass selection:text-parchment"
      >
        Freya's Journey
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
  <section id="Biodata" class="max-w-6xl h-full mx-auto px-5 py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
      <div class="flex flex-col md:col-span-1">
        <h1 class="text-3xl md:text-4xl lg:text-5xl text-brass selection:bg-brass selection:text-parchment">
          Freya<br />
          <span class="text-parchment">Jayawardana</span>
          <span class="text-brass">.</span>
        </h1>
      </div>
      <div class="flex flex-col md:col-span-2 gap-3 selection:bg-brass">
        <p class="text-base">
          Gadis yang memiliki nama lengkap Raden Rara Freyanashifa Jayawardana
          atau lebih dikenal sebagai Freya Jayawardana lahir pada 13 Februari
          2006. Freya merupakan member JKT48 Team Dream Generasi 7 dan saat ini
          mendapatkan kepercayaan menjadi Captain JKT48.
        </p>
        <p class="text-base">
          Freya memulai karirnya di JKT48 sebagai siswi Akademi Kelas B pada
          tanggal 29 September 2018. Namun, ia tidak lulus ujian Akademi Kelas B
          tahap awal tetapi seiring berjalannya waktu, ia akhirnya berhasil
          menjadi siswi Akademi Kelas A pada 18 Desember 2018. Lalu tepat pada 2
          Juni 2020, ia dipromosikan menjadi member JKT48 Team T.
        </p>
        <div class="flex items-center w-full lg:w-[70%] mt-4 gap-3">
          <a
            href="https://x.com/Freya_JKT48"
            target="_blank"
            class="border border-parchment py-1 h-full mx-auto w-full flex text-center justify-center items-center rounded-full"
          >
            <IconTwitter class="size-5" />
          </a>
          <a
            href="https://instagram.com/jkt48.freya"
            target="_blank"
            class="border border-parchment py-1 h-full mx-auto w-full flex text-center justify-center items-center rounded-full"
          >
            <Icon name="mdi:instagram" class="size-6"/>
          </a>
          <a
            href="https://tiktok.com/@freyajkt48"
            target="_blank"
            class="border border-parchment py-1 h-full mx-auto w-full flex text-center justify-center items-center rounded-full"
          >
            <IconTiktok class="size-7" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=kdLuPyPOv1A"
            target="_blank"
            class="border border-parchment py-1 h-full mx-auto w-full flex text-center justify-center items-center rounded-full"
          >
            <Icon name="mdi:youtube" class="size-6"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
