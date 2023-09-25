<template>
    <NavBar />
    <main style="min-height: 100vh;">

        <router-view />

    </main>
    <Footer />
</template>

<script setup>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
</script>

<style lang="scss" scoped></style>