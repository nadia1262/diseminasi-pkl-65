<script setup>
import { Link } from '@inertiajs/vue3';
// Pastikan path logo-mu benar
const logoUrl = '/images/assets/LOGO-PKL_REV8.jpg'; //
</script>

<template>
    <nav class="bg-pkl-base-cream shadow-md w-full sticky top-0 z-50">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <Link href="/">
                <img :src="logoUrl" alt="Logo PKL 65" class="h-12 w-auto">
            </Link>
            <div class="hidden md:flex space-x-6">
                <Link href="/" class="font-sub text-gray-700 hover:text-pkl-base-orange">Beranda</Link>
                <Link href="/hasil-diseminasi" class="font-sub text-gray-700 hover:text-pkl-base-orange">Hasil Diseminasi</Link>
                <Link href="/dokumen" class="font-sub text-gray-700 hover:text-pkl-base-orange">Dokumen</Link>
            </div>
            <div class="hidden md:block">
                <Link 
                    href="/login" 
                    class="font-sub border border-pkl-base-orange text-pkl-base-orange px-4 py-2 rounded-md hover:bg-pkl-base-orange hover:text-white transition-colors"
                >
                    Login Admin
                </Link>
            </div>
            </div>
    </nav>
</template>