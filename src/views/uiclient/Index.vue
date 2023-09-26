<script>
import 'boxicons';
import { onMounted, onUnmounted } from 'vue';

const observer = new IntersectionObserver((entries) => {
    console.log(entries);
});

onMounted(() => {
    const target = document.querySelector('.items');
    observer.observe(target);
});

// Probably optional
onUnmounted(() => {
    observer.disconnect();
});
import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
});
ScrollReveal().reveal('.home-text', { delay: 350, origin: 'left' });
ScrollReveal().reveal('.sub-service', { delay: 200, origin: 'bottom' });
sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact', { delay: 200, origin: 'bottom' });

sr.reveal('.home-text', { delay: 350, origin: 'left' });
sr.reveal('.home-img', { delay: 350, origin: 'right' });
sr.reveal('.main-people', { delay: 350, origin: 'right' });

export default {
    data() {
        return {
            items: [
                {
                    id: '21IT050',
                    name: 'Nguyễn Thị Tiểu Tiên',
                    date: '2003-02-01',
                    address: 'Ha Noi',
                    phone: '0335911575',
                    email: 'tienntt.21it@vku.udn.vn',
                    description: '',
                    image: '21IT050.jpg'
                },
                {
                    id: '21IT067',
                    name: 'CAO QUỐC Dũng',
                    date: '2003-04-10',
                    address: 'Ha Noi',
                    phone: '0934772003',
                    email: 'dungcq.21it@vku.udn.vn',
                    description: '',
                    image: '21IT067.jpg'
                },
                {
                    id: '21IT080',
                    name: 'ĐINH THỊ LAN HƯƠNG',
                    date: '2003-12-17',
                    address: 'Ha Noi',
                    phone: '0989483667',
                    email: 'huongdtl.21it@vku.udn.vn',

                    description: '',
                    image: '21IT080.jpg'
                },
                {
                    id: '21IT090',
                    name: 'LÊ THỊ NGỌC LY',
                    date: '2003-11-27',
                    address: 'Ha Noi',
                    phone: '0704942625',
                    email: 'lyltn.21it@vku.udn.vn',
                    description: '',
                    image: '21IT090.jpg'
                },
                {
                    id: '21IT107',

                    name: 'ĐÀO TRUNG THÀNH',
                    date: '2003-09-01',
                    address: 'Ha Noi',
                    phone: '0946814775',
                    email: 'thanhdt.21it@vku.udn.vn',
                    description: '',
                    image: '21IT107.jpg'
                },
                {
                    id: '21IT169',
                    name: 'VÕ NHƯ QUỲNH',
                    date: '2003-09-28',
                    address: 'Ha Noi',
                    phone: '0989943923',
                    email: 'quynhvn.21it@vku.udn.vn',
                    description: '',
                    image: '21IT169.jpg'
                },
                {
                    id: '21IT242',
                    name: 'TRẦN CHÁNH TÍN',
                    date: '2003-09-26',
                    address: 'Ha Noi',
                    phone: '0396798864',
                    email: 'tintc.21it@vku.udn.vn',
                    description: '',
                    image: '21IT242.jpg'
                },
                {
                    id: '21IT243',
                    name: 'PHẠM CÔNG TÍNH',
                    date: '2003-03-06',
                    address: 'Ha Noi',
                    phone: '0978327458',
                    email: 'tinhpc.21it@vku.udn.vn',
                    description: '',
                    image: '21IT243.jpg'
                },
                {
                    id: '21IT303',
                    name: 'TRẦN QUANG',
                    date: '2003-03-29',
                    address: 'Ha Noi',
                    phone: '0898639048',

                    email: 'quangt.21it@vku.udn.vn',
                    description: '',
                    image: '21IT303.jpg'
                },
                {
                    id: '21IT643',
                    name: 'VŨ MINH QUANG',
                    date: '12/12/2003',
                    address: 'Ha Noi',
                    phone: '0375163291',

                    email: 'quangvm.21it@vku.udn.vn',
                    description: '',
                    image: '21IT643.jpg'
                },
                {
                    id: '21IT307',
                    name: 'NGUYỄN VĂN  SINH',
                    date: '2003-01-20',
                    address: 'Ha Noi',
                    phone: '0935728145',

                    email: 'sinhnv.21it@vku.udn.vn',
                    description: '',
                    image: '21IT307.jpg'
                },
                {
                    id: '21IT333',
                    name: 'VÕ TRỌNG ĐẠT ',
                    date: '12/12/2003',
                    address: 'Ha Noi',
                    phone: '0359941290',

                    email: 'datvt.21it@vku.udn.vn',
                    description: '',
                    image: '21IT333.jpg'
                },
                {
                    id: '21IT303',
                    name: 'TRẦN VIẾT ĐOÀN',
                    date: '2003-07-17',
                    address: 'Ha Noi',
                    phone: '0799319645',

                    email: 'doantv.21it@vku.udn.vn',
                    description: '',
                    image: '21IT303.jpg'
                },
                {
                    id: '21IT375',
                    name: 'QUẢNG HOÀNG SƠN',
                    date: '2003-10-07',
                    address: 'Ha Noi',
                    phone: '0971213792',
                    email: 'sonqh.21it@vku.udn.vn',
                    description: '',
                    image: '21IT375.jpg'
                },
                {
                    id: '21IT652',
                    name: 'TRÀ QUANG THẮNG',
                    date: '2003-04-13',
                    address: 'Ha Noi',
                    phone: '0911916271',

                    email: 'thangtq.21it@vku.udn.vn',
                    description: '',
                    image: '21IT652.jpg'
                }
            ], // Define your items data here
            items2: [
                {
                    id: '21IT658',
                    name: 'NGUYỄN VĂN TRUNG',
                    date: '	2003-01-07',
                    address: 'Ha Noi',
                    phone: '0932583717',
                    email: 'trungnv.21it@vku.udn.vn',
                    description: '',
                    image: '21IT658.jpg'
                },
                {
                    id: '21IT400',
                    name: 'LƯƠNG MINH Dũng',
                    date: '2003-01-06',
                    address: 'Ha Noi',
                    phone: '0583152783',
                    email: 'dunglm.21it@vku.udn.vn',
                    description: '',
                    image: '21IT400.jpg'
                },
                {
                    id: '21IT424',
                    name: 'TỪ CÔNG MINH',
                    date: '2003-08-30',
                    address: 'Ha Noi',
                    phone: '0931368443',
                    email: 'minhtc.21it@vku.udn.vn',

                    description: '',
                    image: '21IT424.jpg'
                },
                {
                    id: '21IT434',
                    name: '	ĐẶNG NGỌC MẠNH NHẬT',
                    date: '2003-02-01',
                    address: 'Ha Noi',
                    phone: '0382887406',
                    email: 'nhatdnm.21it@vku.udn.vn	',
                    description: '',
                    image: '21IT434.jpg'
                },
                {
                    id: '21IT655',

                    name: 'TRẦN CÔNG TIẾN',
                    date: '2003-06-04	',
                    address: 'Ha Noi',
                    phone: '0382802406',
                    email: 'tientc.21it@vku.udn.vn',
                    description: '',
                    image: '21IT655.jpg'
                },
                {
                    id: '21IT458',
                    name: 'TRƯƠNG THANH	TÙNG',
                    date: '2003-10-18',
                    address: 'Ha Noi',
                    phone: '0354723814',
                    email: 'tungtt2.21it@vku.udn.vn',
                    description: '',
                    image: '21IT458.jpg'
                },
                {
                    id: '21IT662',
                    name: 'NGUYỄN VĂN VIÊN',
                    date: '2002-10-16',
                    address: 'Ha Noi',
                    phone: '0372695578',
                    email: 'viennv.21it@vku.udn.vn',
                    description: '',
                    image: '21IT662.jpg'
                },
                {
                    id: '21IT469',
                    name: 'NGUYỄN THÀNH	CÔNG',
                    date: '2003-09-21',
                    address: 'Ha Noi',
                    phone: '0865049035',
                    email: 'congnt.21it@vku.udn.vn',
                    description: '',
                    image: '21IT469.jpg'
                },
                {
                    id: '21IT476',
                    name: 'LÊ VĂN HAI',
                    date: '2003-01-03',
                    address: 'Ha Noi',
                    phone: '0819180877',

                    email: 'hailv.21it@vku.udn.vn	',
                    description: '',
                    image: '21IT476.jpg'
                },
                {
                    id: '21IT607',
                    name: 'LÊ VĂN HẠNH',
                    date: '2003-04-16',
                    address: 'Ha Noi',
                    phone: '0705256624',

                    email: 'hanhlv.21it@vku.udn.vn',
                    description: '',
                    image: '21IT607.jpg'
                },
                {
                    id: '21IT507',
                    name: 'ĐINH VIỆT PHƯƠNG',
                    date: '2002-09-26',
                    address: 'Ha Noi',
                    phone: '0855526902',

                    email: 'phuongdv.21it@vku.udn.vn',
                    description: '',
                    image: '21IT507.jpg'
                },
                {
                    id: '21IT511	',
                    name: 'PHAN XUÂN SỸ ',
                    date: '2003-09-29',
                    address: 'Ha Noi',
                    phone: '0788641673',

                    email: 'sypx.21it@vku.udn.vn',
                    description: '',
                    image: '21IT511	.jpg'
                },
                {
                    id: '21IT556',
                    name: 'TRƯƠNG XUÂN KIÊN',
                    date: '2003-01-22',
                    address: 'Ha Noi',
                    phone: '0799319645',

                    email: 'kientx.21it@vku.udn.vn	',
                    description: '',
                    image: '21IT556.jpg'
                },
                {
                    id: '21IT566',
                    name: 'NGUYỄN THỊ KIM NGÂN',
                    date: '2003-10-14',
                    address: 'Ha Noi',
                    phone: '0333813580',
                    email: 'nganntk.21it@vku.udn.vn',
                    description: '',
                    image: '21IT566.jpg'
                },
                {
                    id: '21IT581',
                    name: 'TRẦN TẤN	TÀI',
                    date: '	2003-08-31',
                    address: 'Ha Noi',
                    phone: '0389093655',

                    email: 'taitt.21it@vku.udn.vn',
                    description: '',
                    image: '21IT581.jpg'
                },
                {
                    id: '21IT667',
                    name: 'TỪ ĐÀM VĂN THIÊN',
                    date: '	2003-08-20',
                    address: 'Ha Noi',
                    phone: '0398069880',
                    email: 'thientdv.21it@vku.udn.vn',
                    description: '',
                    image: '21IT667.jpg'
                }
            ], // Define your items data here
            activeIndex: null,
            activeIndex2: null
        };
    },
    methods: {
        handleClick(index) {
            console.log(index);
            this.activeIndex = index;
        },
        isActive(index) {
            return index === this.activeIndex;
        },
        handleClick2(index) {
            console.log(index);
            this.activeIndex2 = index;
        },
        isActive2(index) {
            return index === this.activeIndex2;
        }
    }
};
</script>

<template>
    <section class="home" id="home">
        <div class="home-text">
            <h3>Hello, We're</h3>
            <h1>K-IT</h1>
            <h5>A KOERA BRSE <span>From VKU - FPT</span></h5>
            <p>
                We're professional Korean-speaking bridge engineers in VKU - FPT, and We're very passionate <br />
                and dedicated to our work.
            </p>
            <router-link :to="{ name: 'home' }" class="top-btn"> Explorer</router-link>
            <router-link :to="{ name: 'home' }" class="top-btn"> Watch Demo</router-link>
        </div>
        <div class="home-img">
            <img src="@/assets/main.jpg" alt="" />
        </div>
    </section>

    <section class="sub-service">
        <div class="items">
            <div class="sub-box">
                <div class="sub-img">
                    <img src="@/assets/icons/target.svg" />
                </div>
                <h3>Pixel Perfect</h3>
                <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
            </div>

            <div class="sub-box">
                <div class="sub-img">
                    <img src="@/assets/icons/brush.svg" />
                </div>
                <h3>High Quality</h3>
                <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
            </div>

            <div class="sub-box">
                <div class="sub-img">
                    <img src="@/assets/icons/energy.svg" />
                </div>
                <h3>Awesome Idea</h3>
                <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
            </div>
        </div>
    </section>

    <section class="student">
        <div class="main-people">
            <div class="people">
                <div v-for="(item, index) in items" class="imgBx" :style="{ '--i': index + 1 }" :class="{ active: isActive(index) }" @click="handleClick(index)" :data-id="'content' + (index + 1)" :key="index">
                    <img :src="'https://cdn.vku-udn.edu.vn/daotao/sinhvien/' + item.image" :alt="'ảnh của ' + item.name" />
                </div>
            </div>
            <div class="content">
                <div v-for="(item, index) in items" class="contentBx" :id="'content' + (index + 1)" :class="{ active: isActive(index) }" :key="index">
                    <div class="card">
                        <div class="imgBx" @click="handleClick(index)">
                            <img :src="'https://cdn.vku-udn.edu.vn/daotao/sinhvien/' + item.image" :alt="'ảnh của ' + item.name" />
                        </div>
                        <div class="textBx">
                            <h2>
                                {{ item.name }} <br />
                                <span>{{ item.id }}</span>
                            </h2>
                            <ul class="sci">
                                <li>
                                    <router-link to="/">
                                        <box-icon type="logo" style="fill: white" name="facebook-circle"></box-icon>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        <box-icon name="github" style="fill: white" type="logo"></box-icon>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        <box-icon type="logo" style="fill: white" name="linkedin"></box-icon>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-people">
            <div class="people">
                <div v-for="(item, index) in items2" class="imgBx" :style="{ '--i': index + 1 }" :class="{ active: isActive2(index) }" @click="handleClick2(index)" :data-id="'content' + (index + 1)" :key="index">
                    <img :src="'https://cdn.vku-udn.edu.vn/daotao/sinhvien/' + item.image" :alt="'ảnh của ' + item.name" />
                </div>
            </div>
            <div class="content">
                <div v-for="(item, index) in items2" class="contentBx" :id="'content' + (index + 1)" :class="{ active: isActive2(index) }" :key="index">
                    <div class="card">
                        <div class="imgBx" @click="handleClick2(index)">
                            <img :src="'https://cdn.vku-udn.edu.vn/daotao/sinhvien/' + item.image" :alt="'ảnh của ' + item.name" />
                        </div>
                        <div class="textBx">
                            <h2>
                                {{ item.name }} <br />
                                <span>{{ item.id }}</span>
                            </h2>
                            <ul class="sci">
                                <li>
                                    <router-link to="/">
                                        <box-icon type="logo" style="fill: white" name="facebook-circle"></box-icon>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        <box-icon name="github" style="fill: white" type="logo"></box-icon>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        <box-icon type="logo" style="fill: white" name="linkedin"></box-icon>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="css">
section {
    padding: 100px 10%;
}
.home {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background: url(@/assets/background.jpg);
    background-size: cover;
    background-position: center;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    grid-gap: 4rem;
}

.home-text h1 {
    margin: 10px 0px 25px;
    font-size: var(--big-font);
    line-height: 1;
    font-weight: 500;
}
.home-text h5 {
    margin-bottom: 23px;
    font-size: 19px;
    font-weight: 500;
}
span {
    color: var(--main-color);
}
.home-text h3 {
    color: var(--main-color);
    font-size: 20px;
    font-weight: 500;
}
.home-text p {
    font-size: var(--p-font);
    color: var(--secound-color);
    line-height: 28px;
    margin-bottom: 20px;
}
.social a {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(128, 103, 240, 1);
    font-size: 17px;
    color: var(--bg-color);
    margin-right: 22px;
    margin-bottom: 30px;
}
.social a:hover {
    transform: scale(1.1);
    background: var(--main-color);
    transition: 0.5s;
}
.btn {
    display: inline-block;
    color: var(--bg-color);
    background: var(--main-color);
    font-size: var(--p-font);
    padding: 10px 40px;
    font-weight: 500;
    line-height: 24px;
    border-radius: 30px;
    transition: ease 0.4s;
}
.btn:hover {
    transform: scale(1.1);
}
.home-img img {
    max-width: 100%;
    width: 540px;
    height: auto;
}

.items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    grid-gap: 2rem;
    align-items: center;
    text-align: center;
}
.sub-box {
    padding: 45px 45px 45px 45px;
    transition: ease 0.5s;
    cursor: pointer;
}
.sub-img img {
    max-width: 100%;
    width: 60px;
    height: auto;
    margin-bottom: 20px;
}
.sub-box h3 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 500;
}
.sub-box p {
    font-size: var(--p-font);
    color: var(--secound-color);
    line-height: 29px;
}
.sub-box:hover {
    background: #ffffff;
    box-shadow: 18px 0px 87px 0px rgb(10 15 70 / 7%);
    border-radius: 12px;
    will-change: transform;
    transform: perspective(1000px) rotateX(4.8deg) rotateY(10.23deg) scale3d(1.05, 1.05, 1.05);
}

.cta-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    grid-gap: 2rem;
    align-items: center;
    margin-top: 5rem;
    text-align: center;
}

/* peopel in class  */
.student {
    min-height: 100vh;
    width: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.main-people {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 500px;
    border: 2px solid var(--text-color);
    border-radius: 50%;
}

.main-people .people {
    position: relative;
    left: -50%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.main-people .people .imgBx {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    transition: 0.2s;
    border: 1px solid var(--text-color);
    box-shadow: 0 0 0 4px #222, 0 0 0 6px #fff;
    transform: rotate(calc(360deg / 15 * var(--i)));
    transform-origin: 290px;
    z-index: 100;
    overflow: hidden;
}
.main-people .people .imgBx.active {
    box-shadow: 0 0 0 6px #222, 0 0 0 12px #2196f3;
}

.main-people .people .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    transform: rotate(calc(-360deg / 15 * var(--i)));
    transition: 0.2s;
}

.content {
    position: absolute;
    inset: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content::before {
    content: '';
    position: absolute;
    inset: 60px;
    border: 4px solid transparent;
    border-left: 4px solid #cede20;
    border-right: 4px solid #d43b3b;
    border-radius: 50%;
    animation: animte_01 5s linear infinite;
    z-index: 1;
    pointer-events: none;
}
@keyframes animte_01 {
    0% {
        rotate: 0deg;
    }
    100% {
        rotate: 360deg;
    }
}

.content::after {
    content: '';
    position: absolute;
    inset: 100px;
    border: 4px solid transparent;
    border-left: 4px solid #2196f3;
    border-right: 4px solid #55e468;
    border-radius: 50%;
    animation: animte_02 2.5s linear infinite;
    z-index: 1;
    pointer-events: none;
}
@keyframes animte_02 {
    0% {
        rotate: 360deg;
    }
    100% {
        rotate: 0deg;
    }
}

.contentBx {
    position: absolute;
    transform: scale(0);
    transition: 0.5s;
    opacity: 0;
}

.contentBx.active {
    transform: scale(1);
    opacity: 1;
    transition-delay: 0.1s;
}
.contentBx .card {
    position: relative;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    gap: 15px;
}

.contentBx .card .imgBx {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
}
.contentBx .card .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contentBx .card .textBx {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
}
.contentBx .card .textBx h2 {
    position: relative;
    font-size: 1.2rem;

    font-weight: 600;
    color: var(--text-color);
    line-height: 1em;
    text-transform: uppercase;
    text-align: center;
}

.contentBx .card .textBx h2 span {
    font-size: 0.65rem;
    color: var(--text-color);
    font-weight: 500;
    letter-spacing: 0.1rem;
}
.contentBx .card .textBx .sci {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 7px;
    margin-top: 10px;
}
.contentBx .card .textBx .sci li {
    list-style: none;
}
.contentBx .card .textBx .sci li a {
    position: relative;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #444;
    color: var(--bg-color);
    text-decoration: none;
    border-radius: 5px;
    transition: 0.5s;
}
.contentBx .card .textBx .sci li a:hover {
    background: #2196f3;
}

@media (max-width: 1425px) {
    .header-client {
        padding: 16px 3%;
        transition: 0.3s;
    }
    .header-client.sticky {
        padding: 10px 3%;
        transition: 0.3s;
    }
    section {
        padding: 70px 3%;
        transition: 0.3s;
    }

    :root {
        --big-font: 4rem;
        --h2-font: 2.3rem;
        --p-font: 1rem;
        transition: 0.3s;
    }
}

@media (max-width: 970px) {
    .student > div {
        gap: 10;
    }
    #menu-icon {
        display: block;
    }
    .home {
        min-height: 80vh;
    }
    .navlist {
        position: absolute;
        top: -600px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: var(--main-color);
        text-align: left;
        transition: all 0.4s;
    }
    .navlist a {
        display: block;
        padding: 1.2rem;
        margin: 0.5rem;
        border-right: 2px solid var(--bg-color);
        color: var(--bg-color);
    }
    .navlist a:hover {
        background: var(--bg-color);
        color: var(--main-color);
    }
    .navlist a::after {
        display: none;
    }
    .navlist.active {
        top: 100%;
    }
}

@media (max-width: 800px) {
    .home {
        grid-template-columns: 1fr;
        min-height: 130vh;
        grid-gap: 1rem;
    }
    .home-text {
        padding-top: 55px;
        padding-left: 60px;
    }
    .home-img {
        text-align: center;
    }
    .home-img img {
        width: 440px;
        height: auto;
    }

    :root {
        --big-font: 3.4rem;
        --h2-font: 2rem;
    }
    section {
        padding: 65px 3%;
        transition: 0.3s;
    }
    .student {
        justify-content: center;
    }
    .main-people {
        width: 350px;
        height: 350px;
        border: 1px solid var(--text-color);
        margin: 50px 0;
    }
    .main-people .people .imgBx {
        width: 65px;
        height: 65px;
        transform-origin: 200px;
    }

    .content::before {
        inset: 0;
    }
    .content::after {
        inset: 0;
    }

    .contentBx .card .imgBx {
        width: 100px;
        height: 100px;
    }
    .contentBx .card .textBx h2 {
        font-size: 0.9rem;
    }
}
@media (max-width: 540px) {
    .home-text {
        padding-top: 55px;
        padding-left: 30px;
    }
}
</style>
