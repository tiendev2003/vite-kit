<script setup>
import NavBar from './../components/ClientNavBar.vue';
import AppFooter from './../components/AppFooter.vue';
import ScrollTop from 'primevue/scrolltop';
import { ref } from 'vue'

const anim = ref('fade')
</script>
<template>
    <NavBar />
    <main style="min-height: 100vh">
		<router-view v-slot="{ Component, route }">
			<!-- Use any custom transition and  to `fade` -->
			<transition :name="route.meta.transition || anim">
				<component :is="Component" :key="route.path" />
			</transition>
		  </router-view>
    </main>
    <div style="padding-bottom: 20px">
        <AppFooter />
    </div>
    <ScrollTop />
</template>
<style lang="css">
section {
	padding: 100px 10%;
  }
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
	transition: 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
	opacity: 0;
	transform: translateY(300px);
}

.slide-down-enter-active,
.slide-down-leave-active {
	transition: 0.3s ease-out;
}

.grow-in-enter-from,
.grow-in-leave-to {
	opacity: 0;
	transform: scale(0.3);
}

.grow-in-enter-active,
.grow-in-leave-active {
	transition: 0.3s ease-out;
}

.grow-out-enter-from,
.grow-out-leave-to {
	opacity: 0;
	transform: scale(1.5);
}

.grow-out-enter-active,
.grow-out-leave-active {
	transition: 0.3s ease-out;
}</style>