<script setup>
import NavBar from './NavBar.vue';
import AppFooter from '@/layout/AppFooter.vue';
import ScrollTop from 'primevue/scrolltop';
</script>
<template>
    <NavBar />
    <main style="min-height: 100vh">
        <router-view />
    </main>
    <div style="padding-bottom: 20px">
        <AppFooter />
    </div>
    <ScrollTop />
</template>
