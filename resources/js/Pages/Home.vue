<script setup>
import { Head, Link } from '@inertiajs/vue3';

// 1. PASTIKAN KAMU SUDAH BUAT FILE INI
import PKL65Layout from '@/Layouts/PKL65Layout.vue'; 

// 2. INI KUNCINYA. Memaksa halaman ini pakai layout PKL 65
defineOptions({
    layout: PKL65Layout 
});

// 3. PASTIKAN SEMUA FILE INI ADA DI /public/images/assets/
const heroAssets = {
    tugu: '/images/assets/landmark-tugu-yogya.svg',
    prambanan: '/images/assets/landmark-prambanan-siluet.svg',
    gunung: '/images/assets/lanskap-gunung-abstrak.svg'
};
</script>

<templat>
    <Head title="Beranda - Diseminasi PKL 65 DI Yogyakarta" />

    <section class="relative pt-20 pb-32 overflow-hidden bg-pkl-base-cream bg-opacity-30">
        <div class="container mx-auto px-4 relative z-10">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                
                <div class="text-center md:text-left">
                    <h1 class="font-headline text-5xl md:text-7xl text-pkl-base-orange drop-shadow-sm">
                        Mengupas Fenomena GIG Worker di DI Yogyakarta
                    </h1>
                    
                    <p class="font-sub text-xl md:text-2xl text-gray-700 mt-6">
                        Hasil Praktik Kerja Lapangan ke-65 Politeknik Statistika STIS
                    </p>
                    
                    <Link 
                        href="#hasil-penelitian" 
                        class="inline-block mt-10 bg-pkl-base-orange text-white font-sub text-lg px-8 py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-all"
                    >
                        Lihat Hasil Penelitian
                    </Link>
                </div>

                <div class="relative h-64 md:h-96">
                    <img :src="heroAssets.gunung" alt="Lanskap Gunung" class="absolute bottom-0 left-0 w-full h-auto opacity-70 object-cover" />
                    <img :src="heroAssets.prambanan" alt="Landmark Prambanan" class="absolute bottom-0 right-0 h-3/4 w-auto" />
                    <img :src="heroAssets.tugu" alt="Landmark Tugu Yogya" class="absolute bottom-0 left-10 h-full w-auto" />
                </div>
            </div>
        </div>
    </section>

    </templat>