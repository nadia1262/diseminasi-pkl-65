<script setup>
// Kita akan buat 2 komponen ini selanjutnya
import Navbar from '@/Components/Public/Navbar.vue';
import Footer from '@/Components/Public/Footer.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col bg-white">
        
        <Navbar />

        <main class="flex-grow">
            <slot />
        </main>

        <Footer />
    </div>
</template>