<script>
import 'boxicons';

export default {
    data() {
        return {
            isMenuOpen: false,
            isSticky: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        // Đảm bảo gỡ lắng nghe sự kiện khi component bị hủy
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        handleScroll() {
            this.isMenuOpen = false;
            if (window.scrollY > 0) {
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }
        }
    }
};
</script>
<template>
    <div class="header-client" :class="{ sticky: isSticky }">
        <router-link :to="{ name: 'home' }" class="logo">
            <img src="../assets/logo.jpg" alt="" />
        </router-link>

        <ul class="navlist-client" :class="{ active: isMenuOpen }">
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
            <li><router-link :to="{ name: 'product' }">Product</router-link></li>
            <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
            <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
        </ul>
        <div id="menu-icon-client">
            <box-icon id="tien" :name="isMenuOpen ? 'x' : 'menu'" @click="toggleMenu" :class="{ 'bx-x ': isMenuOpen }"></box-icon>
        </div>
    </div>
</template>
<style lang="css" setup>
:root {
    --bg-color: #ffffff;
    --text-color: #000;
    --secound-color: #a09dab;
    --main-color: #0a7ecc;
    --big-font: 5rem;
    --h2-font: 3rem;
    --p-font: 1.1rem;
    --light-gray-70: hsla(0, 0%, 84%, 0.7);
    --white-2: hsl(0, 0%, 98%);
    --eerie-black-2: hsl(240, 2%, 12%);
    --light-gray: hsl(0, 0%, 84%);

    --jet: hsl(0, 0%, 22%);
}
.header-client {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    padding: 10px 10%;
    transition: all 0.3s ease-in-out;
}

.header-client.sticky {
    transition: all 0.3s ease-in-out;
    background: #0a7ecc;

    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
}

.logo img {
    max-width: 100%;
    width: 70px;
    height: auto;
}

.navlist-client {
    display: flex;
}

.navlist-client li {
    position: relative;
    list-style: none;
}
.navlist-client a {
    font-size: var(--p-font);
    color: var(--text-color);
    font-weight: 500;
    padding: 10px 27px;
}
.navlist-client a:hover {
    color: var(--main-color);
}
.header-client.sticky .navlist-client a::after {
    color: var(--text-color);
    background: var(--bg-color);
}
.header-client.sticky .navlist-client a:hover {
    color: var(--text-color);
}
.navlist-client a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: var(--main-color);
    bottom: -3px;
    left: 0;
    transition: ease 0.4s;
}
.navlist-client a:hover::after {
    width: 100%;
}

#menu-icon-client {
    font-size: 35px;
    color: var(--text-color);
    z-index: 10001;
    cursor: pointer;
    display: none;
}

.top-btn {
    display: inline-block;
    padding: 9px 30px;
    background: transparent;
    border: 2px solid var(--main-color);
    border-radius: 30px;
    color: var(--text-color);
    letter-spacing: 1px;
    font-size: var(--p-font);
    font-weight: 500;
    transition: ease 0.5s;
    margin-left: 10px;
}
.top-btn:hover {
    transform: scale(1.1);
    background: var(--main-color);
    border: 2px solid var(--main-color);
    color: var(--bg-color);
}
@media (max-width: 970px) {
    #menu-icon-client {
        display: block;
    }
    .navlist-client {
        position: absolute;
        top: -600px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: var(--main-color);
        text-align: left;
        transition: all 0.4s;
    }
    .navlist-client a {
        display: block;
        padding: 1.2rem;
        margin: 0.5rem;
        border-right: 2px solid var(--bg-color);
        color: var(--bg-color);
    }
    .navlist-client a:hover {
        background: var(--bg-color);
        color: var(--main-color);
    }
    .navlist-client a::after {
        display: none;
    }
    .navlist-client.active {
        top: 100%;
    }
}
</style>
