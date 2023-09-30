<script>
import '@/assets/styles.scss';
import { Vue3Lottie } from 'vue3-lottie';
import AstronautJSON from '@/assets/json/success.json';
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
    components: {
        Vue3Lottie
    },
    data() {
        return {
            AstronautJSON
        };
    },
    methods: {
        ...mapActions(['set_user'])
    },
    async created() {
        await axios({
            method: 'get',
            url: 'http://localhost:5000/api/v1/auth/login/success',
            withCredentials: true
        })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    this.set_user(res.data.data);
                    this.$router.push('/');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
</script>
<template>
    <div class="min-h-screen flex align-items-center justify-content-center flex-column">
        <Vue3Lottie :animationData="AstronautJSON" :height="200" :width="200" direction="alternate" :loop="1" />
        <p class="text-2xl">Đăng nhập thành công</p>
        <Button label="Trang chủ" icon="pi pi-home" iconPos="left" />
    </div>
</template>

<style lang="scss" scoped></style>
