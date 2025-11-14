<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PKL65Layout from '@/Layouts/PKL65Layout.vue'; 

defineOptions({
    layout: PKL65Layout 
});

const heroAssets = {
    tugu: '/images/assets/landmark-tugu-yogya.svg',
    prambanan: '/images/assets/landmark-prambanan-siluet.svg',
    gunung: '/images/assets/lanskap-gunung-abstrak.svg'
};

const metodologiAssets = {
    cakupan: '/images/assets/metodologi-cakupan.svg',
    sampel: '/images/assets/metodologi-sampel.svg',
    data: '/images/assets/metodologi-data.svg'
};
</script>

<template>
    <Head title="Beranda - Diseminasi PKL 65 DI Yogyakarta" />

    <!-- Hero Section - Matching Figma design exactly -->
    <section class="relative pt-12 pb-20 overflow-hidden bg-pkl-base-cream">
        <div class="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
                <!-- Left Content -->
                <div class="text-left space-y-6">
                    <h1 class="font-headline text-7xl lg:text-8xl xl:text-9xl text-pkl-base-orange leading-none tracking-tight">
                        Praktik Kerja<br>Lapangan
                    </h1>
                    <h2 class="font-sub text-xl lg:text-2xl text-gray-800">
                        Politeknik Statistika STIS T.A. 2025/2026
                    </h2>
                    <p class="font-sans text-base lg:text-lg text-gray-700 leading-relaxed max-w-xl pr-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praktik Kerja Lapangan Mahasiswa Tingkat III Politeknik Statistika STIS T.A.2026 diadakan di seluruh kabupaten/kota terpilih di Provinsi DI Yogyakarta dengan tema Riset Gig Worker dengan slogan "Lorem Ipsum Dolor Sit Amet".
                    </p>
                    <Link 
                        href="#hasil-penelitian" 
                        class="inline-flex items-center mt-8 bg-pkl-compliment-green text-white font-sub text-base px-7 py-3.5 rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
                    >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Lihat Hasil Riset
                    </Link>
                </div>

                <!-- Right Content - Landmark Composition -->
                <div class="relative h-[500px] lg:h-[600px]">
                    <!-- Background ornament blur effect -->
                    <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-pkl-base-orange/20 to-pkl-compliment-yellow/30 rounded-full blur-3xl"></div>
                    
                    <!-- Landmark composition matching Figma -->
                    <div class="relative w-full h-full flex items-end justify-center">
                        <!-- Mountain landscape at bottom -->
                        <img 
                            :src="heroAssets.gunung" 
                            alt="Lanskap Gunung" 
                            class="absolute bottom-0 left-0 right-0 w-full h-32 object-cover object-bottom opacity-70" 
                        />
                        
                        <!-- Tugu Yogya (left, tallest) -->
                        <img 
                            :src="heroAssets.tugu" 
                            alt="Landmark Tugu Yogya" 
                            class="absolute bottom-0 left-[15%] h-[85%] w-auto object-contain drop-shadow-2xl z-10" 
                        />
                        
                        <!-- Prambanan (right, medium height) -->
                        <img 
                            :src="heroAssets.prambanan" 
                            alt="Landmark Prambanan" 
                            class="absolute bottom-0 right-[15%] h-[70%] w-auto object-contain opacity-90 drop-shadow-xl" 
                        />
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Bottom wave decoration -->
        <div class="absolute bottom-0 left-0 right-0 h-20 lg:h-32">
            <svg class="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z" fill="#ffffff" fill-opacity="1"/>
            </svg>
        </div>
    </section>

    <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-4xl">
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 class="font-headline text-4xl text-gray-800 mb-6">Latar Belakang</h2>
                    <p class="font-sans text-gray-600 leading-relaxed mb-4">
                        (Placeholder) Masukkan teks paragraf latar belakang di sini. Jelaskan mengapa topik GIG worker di Yogyakarta penting untuk diteliti oleh mahasiswa Politeknik Statistika STIS.
                    </p>
                    <p class="font-sans text-gray-600 leading-relaxed">
                        (Placeholder) Teks paragraf kedua, mungkin menjelaskan dampak ekonomi atau sosial dari fenomena GIG worker ini.
                    </p>
                </div>
                <div>
                    <img src="/images/assets/ornamen-daun-warna.svg" alt="Ornamen Latar Belakang" class="w-full h-auto opacity-80" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 bg-pkl-base-cream bg-opacity-30">
        <div class="container mx-auto px-4 max-w-4xl text-center">
            <h2 class="font-headline text-4xl text-gray-800">Tujuan Penelitian</h2>
            <p class="font-sans text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
                (Placeholder) Masukkan deskripsi singkat mengenai tujuan umum dan khusus dari penelitian PKL 65 ini.
            </p>
        </div>
    </section>

    <section class="py-24 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto">
                <h2 class="font-headline text-4xl text-gray-800">Riset Utama</h2>
                <p class="font-sans text-lg text-gray-600 mt-6">
                    Fokus penelitian PKL 65 terbagi menjadi tiga riset utama yang saling berkaitan (Riset 1, 2, dan 5).
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center transition-transform hover:scale-105">
                    <span class="inline-block bg-pkl-compliment-yellow text-pkl-base-orange font-headline text-3xl h-16 w-16 rounded-full leading-relaxed shadow-md">1</span>
                    <h3 class="font-sub text-2xl text-gray-900 mt-4">Riset 1</h3>
                    <p class="font-sans text-gray-600 mt-2 h-20">
                        (Placeholder) Deskripsi singkat tentang apa itu Riset 1.
                    </p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center transition-transform hover:scale-105">
                    <span class="inline-block bg-pkl-compliment-blue text-white font-headline text-3xl h-16 w-16 rounded-full leading-relaxed shadow-md">2</span>
                    <h3 class="font-sub text-2xl text-gray-900 mt-4">Riset 2</h3>
                    <p class="font-sans text-gray-600 mt-2 h-20">
                        (Placeholder) Deskripsi singkat tentang apa itu Riset 2.
                    </p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center transition-transform hover:scale-105">
                    <span class="inline-block bg-pkl-compliment-green text-white font-headline text-3xl h-16 w-16 rounded-full leading-relaxed shadow-md">5</span>
                    <h3 class="font-sub text-2xl text-gray-900 mt-4">Riset 5</h3>
                    <p class="font-sans text-gray-600 mt-2 h-20">
                        (Placeholder) Deskripsi singkat tentang apa itu Riset 5.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 bg-pkl-base-cream bg-opacity-30">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto">
                <h2 class="font-headline text-4xl text-gray-800">Metodologi</h2>
                <p class="font-sans text-lg text-gray-600 mt-6">
                    Metodologi yang digunakan dalam pelaksanaan Praktik Kerja Lapangan ke-65.
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
                    <img :src="metodologiAssets.cakupan" alt="Cakupan Penelitian" class="h-40 mx-auto" />
                    <h3 class="font-sub text-2xl text-gray-900 mt-4">Cakupan Penelitian</h3>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
                    <img :src="metodologiAssets.sampel" alt="Metode Penarikan Sampel" class="h-40 mx-auto" />
                    <h3 class="font-sub text-2xl text-gray-900 mt-4">Metode Penarikan Sampel</h3>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
                    <img :src="metodologiAssets.data" alt="Metode Pengumpulan Data" class="h-40 mx-auto" />
                    <h3 class="font-sub text-2xl text-gray-900 mt-4">Metode Pengumpulan Data</h3>
                </div>
            </div>
        </div>
    </section>
    
    <section id="hasil-penelitian" class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-4xl text-center">
            <img src="/images/assets/hasil-penelitian.svg" alt="Hasil Penelitian" class="h-48 mx-auto mb-6" />
            <h2 class="font-headline text-4xl text-gray-800">Hasil Penelitian</h2>
            <p class="font-sans text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
                Lihat visualisasi data dan temuan menarik dari hasil penelitian kami secara mendalam.
            </p>
            <Link 
                href="/hasil-diseminasi" 
                class="inline-block mt-10 bg-pkl-compliment-green text-white font-sub text-lg px-8 py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-all"
            >
                Jelajahi Hasil Diseminasi
            </Link>
        </div>
    </section>
</template>