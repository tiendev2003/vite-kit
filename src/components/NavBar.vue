<template>
    <header id="header" :class="{ 'sticky': isSticky }">
        <router-link :to="{ name: 'home' }" class="logo">

            <img src="../assets/logo.jpg" alt="">
        </router-link>

        <ul class="navlist" :class="{ 'active': isMenuOpen }">
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
            <li><router-link :to="{ name: 'product' }">Product</router-link></li>
            <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
            <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>

        </ul>
        <div id="menu-icon">

            <box-icon id="tien" :name="isMenuOpen ? 'x' : 'menu'" @click="toggleMenu"
                :class="{ 'bx-x ': isMenuOpen }"></box-icon>
        </div>

    </header>
</template>

<script>

// window.addEventListener("scroll", function () {
//     header.classList.toggle("sticky", window.scrollY > 0);
// });

import 'boxicons';

export default {
    data() {
        return {
            isMenuOpen: false,
            isSticky: false
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);


    },
    beforeDestroy() {
        // Đảm bảo gỡ lắng nghe sự kiện khi component bị hủy
        window.removeEventListener("scroll", this.handleScroll);

    },
    methods: {
        toggleMenu() {

            this.isMenuOpen = !this.isMenuOpen;
        },
        handleScroll(event) {
            this.isMenuOpen = false;
            if (window.scrollY > 0) {
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }

        }

    },
}
</script>
 