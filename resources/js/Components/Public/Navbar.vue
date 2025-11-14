<script setup>
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
    <nav class="bg-pkl-base-orange shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-6 lg:px-12 xl:px-16">
            <div class="flex items-center justify-between h-20">
                <!-- Logo and Title -->
                <Link href="/" class="flex items-center space-x-3 group">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <img src="/images/logo-stis.png" alt="Logo STIS" class="w-10 h-10 object-contain" />
                    </div>
                    <div class="hidden md:block">
                        <h1 class="font-sub text-white text-lg font-semibold leading-tight">
                            Website Hasil PKL 65
                        </h1>
                        <p class="font-sans text-pkl-base-cream text-xs">
                            Tahun Ajaran 2025/2026
                        </p>
                    </div>
                </Link>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-8">
                    <Link 
                        href="/" 
                        class="font-sub text-white hover:text-pkl-compliment-yellow transition-colors text-base"
                        :class="{ 'text-pkl-compliment-yellow font-semibold': $page.url === '/' }"
                    >
                        Beranda
                    </Link>
                    <Link 
                        href="/hasil-riset" 
                        class="font-sub text-white hover:text-pkl-compliment-yellow transition-colors text-base"
                        :class="{ 'text-pkl-compliment-yellow font-semibold': $page.url.startsWith('/hasil-riset') }"
                    >
                        Hasil Riset
                    </Link>
                    <Link 
                        href="/login" 
                        class="font-sub bg-white text-pkl-base-orange px-6 py-2.5 rounded-full hover:bg-pkl-base-cream transition-all shadow-md hover:shadow-lg"
                    >
                        Login
                    </Link>
                </div>

                <!-- Mobile Menu Button -->
                <button 
                    @click="toggleMobileMenu"
                    class="lg:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div 
                v-show="mobileMenuOpen"
                class="lg:hidden py-4 border-t border-white/20"
            >
                <div class="flex flex-col space-y-3">
                    <Link 
                        href="/" 
                        @click="toggleMobileMenu"
                        class="font-sub text-white hover:text-pkl-compliment-yellow transition-colors py-2 text-base"
                        :class="{ 'text-pkl-compliment-yellow font-semibold': $page.url === '/' }"
                    >
                        Beranda
                    </Link>
                    <Link 
                        href="/hasil-riset" 
                        @click="toggleMobileMenu"
                        class="font-sub text-white hover:text-pkl-compliment-yellow transition-colors py-2 text-base"
                        :class="{ 'text-pkl-compliment-yellow font-semibold': $page.url.startsWith('/hasil-riset') }"
                    >
                        Hasil Riset
                    </Link>
                    <Link 
                        href="/login" 
                        @click="toggleMobileMenu"
                        class="font-sub bg-white text-pkl-base-orange px-6 py-2.5 rounded-full hover:bg-pkl-base-cream transition-all shadow-md text-center"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    </nav>
</template>