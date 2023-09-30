<script>
import axios from 'axios';

export default {
    name: 'VerifyEmail',
    async created() {
        this.email = this.$route.params.email;
        this.token = this.$route.params.token;
        console.log(this.$route.params.email);
        await axios({
            method: 'post',
            url: 'http://localhost:5000/api/v1/auth/verify-email',
            data: {
                email: this.email,
                token: this.token
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    this.$toast.success({
                        title: 'Xác thực thành công',
                        message: 'Đang chuyển hướng đến trang chủ',
                        position: 'top-right',
                        duration: 5000
                    });
                    this.$router.push({ name: 'dashboard' });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },
    setup() {
        return {
            //
        };
    },
    data() {
        return {
            countDown: 5,
            intervalId: null,
            email: '',
            token: '',
            isVerified: false
        };
    },

    beforeUnmount() {
        clearInterval(this.intervalId);
    }
};
</script>
<template>
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
        <p style="">{{ email }} : {{ token }}</p>
        <p style="font-size: 30px; font-weight: 500">Đang Xác Thực Email Vui lòng chờ trong giây lát</p>
    </div>
</template>

<style lang="scss" scoped></style>
