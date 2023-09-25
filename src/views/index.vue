<template>
    


        <section class="home" id="home">
            <div class="home-text">
                <h3>Hello, We're</h3>
                <h1>K-IT</h1>
                <h5>A KOERA BRSE <span>From VKU - FPT</span></h5>
                <p>We're professional Korean-speaking bridge engineers in VKU - FPT, and We're very passionate <br> and
                    dedicated to our work.</p>
                <router-link :to="{ name: 'home' }" class="top-btn"> Explorer</router-link>
                <router-link :to="{ name: 'home' }" class="top-btn"> Watch Demo</router-link>
            </div>
            <div class="home-img">
                <img src="../assets/main.jpg" alt="">
            </div>

        </section>

        <section class="sub-service">
            <div class="items">
                <div class="sub-box">
                    <div class="sub-img">
                        <img src="../assets/target.svg">
                    </div>
                    <h3>Pixel Perfect</h3>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive
                        design.
                    </p>
                </div>

                <div class="sub-box">
                    <div class="sub-img">
                        <img src="../assets/brush.svg">
                    </div>
                    <h3>High Quality</h3>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive
                        design.
                    </p>
                </div>

                <div class="sub-box">
                    <div class="sub-img">
                        <img src="../assets/energy.svg">
                    </div>
                    <h3>Awesome Idea</h3>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive
                        design.
                    </p>
                </div>

            </div>
        </section>


        <section class="student">
            <div class="main-people">
                <div class="people">
                    <div v-for="(item, index) in items" class="imgBx  " :style="{ '--i': index + 1 }"
                        :class="{ active: isActive(index) }" @click="handleClick(index)" :data-id="'content' + (index + 1)">
                        <img :src="'./src/assets/img/' + item.image" :alt="'ảnh của ' + item.name">
                    </div>

                </div>
                <div class="content">
                    <div v-for="(item, index) in items" class="contentBx" :id="'content' + (index + 1)"
                        :class="{ active: isActive(index) }">
                        <div class="card  ">
                            <div class="imgBx" @click="handleClick(index)">
                                <img :src="'./src/assets/img/' + item.image" :alt="'ảnh của ' + item.name">
                            </div>
                            <div class="textBx">
                                <h2>{{ item.name }} <br> <span>{{ item.id }}</span></h2>
                                <ul class="sci">
                                    <li>
                                        <router-link to="/">
                                            <box-icon type='logo' style="fill: white;" name='facebook-circle'></box-icon>
                                        </router-link>

                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <box-icon name='github' style="fill: white;" type='logo'></box-icon>
                                        </router-link>

                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <box-icon type='logo' style="fill: white;" name='linkedin'></box-icon>
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
                    <div v-for="(item, index) in items2" class="imgBx  " :style="{ '--i': index + 1 }"
                        :class="{ active: isActive2(index) }" @click="handleClick2(index)"
                        :data-id="'content' + (index + 1)">
                        <img :src="'./src/assets/img/' + item.image" :alt="'ảnh của ' + item.name">
                    </div>

                </div>
                <div class="content">
                    <div v-for="(item, index) in items2" class="contentBx" :id="'content' + (index + 1)"
                        :class="{ active: isActive2(index) }">
                        <div class="card  ">
                            <div class="imgBx" @click="handleClick2(index)">
                                <img :src="'./src/assets/img/' + item.image" :alt="'ảnh của ' + item.name">
                            </div>
                            <div class="textBx">
                                <h2>{{ item.name }} <br> <span>{{ item.id }}</span></h2>
                                <ul class="sci">
                                    <li>
                                        <router-link to="/">
                                            <box-icon type='logo' style="fill: white;" name='facebook-circle'></box-icon>
                                        </router-link>

                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <box-icon name='github' style="fill: white;" type='logo'></box-icon>
                                        </router-link>

                                    </li>
                                    <li>
                                        <router-link to="/">
                                            <box-icon type='logo' style="fill: white;" name='linkedin'></box-icon>
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

<script   >

import 'boxicons';
import { onMounted, onUnmounted } from "vue";
// const mockdata = [
//     {
//         id: "21IT655",
//         name: "Tien",
//         date: "12/12/2003",
//         address: "Ha Noi",
//         phone: "0123456789",
//         email: "",
//         description: "",
//         image: "21IT655.jpg",
//     },
//     {
//         id: "21IT067",
//         name: "Tien",
//         date: "12/12/2003",
//         address: "Ha Noi",
//         phone: "0123456789",
//         email: "",
//         description: "",
//         image: "21IT067.jpg",
//     },
//     {
//         id: "21IT080",
//         name: "Tien",
//         date: "12/12/2003",
//         address: "Ha Noi",
//         phone: "0123456789",
//         email: "",

//         description: "",
//         image: "21IT080.jpg",
//     },
//     {
//         id: "21IT090",
//         name: "Tien",
//         date: "12/12/2003",
//         address: "Ha Noi",
//         phone: "0123456789",
//         email: "",
//         description: "",
//         image: "21IT090.jpg",
//     },
//     {
//         id: '21IT107',

//         name: "Tien",
//         date: "12/12/2003",
//         address: "Ha Noi",
//         phone: "0123456789",
//         email: "",
//         description: "",
//         image: "21IT107.jpg",
//     },
//     {
//         id: "21IT169",
//         name: "Tien",
//         date: "12/12/2003",
//         address: "Ha Noi",
//         phone: "0123456789",
//         email: "",
//         description: "",
//         image: "21IT169.jpg",
//     },
//     {
//         id: "21IT242",
//         name: "Tien",
//         date: "12/12/2003",
//         address: "Ha Noi",
//         phone: "0123456789",
//         email: "",
//         description: "",
//         image: "21IT242.jpg",
//     },
//     {
//         id: "21IT243",
//         name: "Tien",
//         date: "12/12/2003",
//         address: "Ha Noi",
//         phone: "0123456789",
//         email: "",
//         description: "",
//         image: "21IT243.jpg",
//     },
//     {
//         id: "21IT303",
//         name: "Tien",
//         date: "12/12/2003",
//         address: "Ha Noi",
//         phone: "0123456789",

//         email: "",
//         description: "",
//         image: "21IT303.jpg",
//     },
// ]
// const items = ref(mockdata);

const observer = new IntersectionObserver((entries, observer) => {
    console.log(entries)
});

onMounted(() => {
    const target = document.querySelector(".items");
    observer.observe(target);
})

// Probably optional
onUnmounted(() => {
    observer.disconnect()
})


const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})
ScrollReveal().reveal('.home-text', { delay: 350, origin: 'left' })
ScrollReveal().reveal('.sub-service', { delay: 200, origin: 'bottom' })
sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact', { delay: 200, origin: 'bottom' })

sr.reveal('.home-text', { delay: 350, origin: 'left' })
sr.reveal('.home-img', { delay: 350, origin: 'right' })

export default {
    data() {
        return {
            items: [
                {
                    id: "21IT050",
                    name: "Nguyễn Thị Tiểu Tiên",
                    date: "2003-02-01",
                    address: "Ha Noi",
                    phone: "0335911575",
                    email: "tienntt.21it@vku.udn.vn",
                    description: "",
                    image: "21IT050.jpg",
                },
                {
                    id: "21IT067",
                    name: "CAO QUỐC Dũng",
                    date: "2003-04-10",
                    address: "Ha Noi",
                    phone: "0934772003",
                    email: "dungcq.21it@vku.udn.vn",
                    description: "",
                    image: "21IT067.jpg",
                },
                {
                    id: "21IT080",
                    name: "ĐINH THỊ LAN HƯƠNG",
                    date: "2003-12-17",
                    address: "Ha Noi",
                    phone: "0989483667",
                    email: "huongdtl.21it@vku.udn.vn",

                    description: "",
                    image: "21IT080.jpg",
                },
                {
                    id: "21IT090",
                    name: "LÊ THỊ NGỌC LY",
                    date: "2003-11-27",
                    address: "Ha Noi",
                    phone: "0704942625",
                    email: "lyltn.21it@vku.udn.vn",
                    description: "",
                    image: "21IT090.jpg",
                },
                {
                    id: '21IT107',

                    name: "ĐÀO TRUNG THÀNH",
                    date: "2003-09-01",
                    address: "Ha Noi",
                    phone: "0946814775",
                    email: "thanhdt.21it@vku.udn.vn",
                    description: "",
                    image: "21IT107.jpg",
                },
                {
                    id: "21IT169",
                    name: "VÕ NHƯ QUỲNH",
                    date: "2003-09-28",
                    address: "Ha Noi",
                    phone: "0989943923",
                    email: "quynhvn.21it@vku.udn.vn",
                    description: "",
                    image: "21IT169.jpg",
                },
                {
                    id: "21IT242",
                    name: "TRẦN CHÁNH TÍN",
                    date: "2003-09-26",
                    address: "Ha Noi",
                    phone: "0396798864",
                    email: "tintc.21it@vku.udn.vn",
                    description: "",
                    image: "21IT242.jpg",
                },
                {
                    id: "21IT243",
                    name: "PHẠM CÔNG TÍNH",
                    date: "2003-03-06",
                    address: "Ha Noi",
                    phone: "0978327458",
                    email: "tinhpc.21it@vku.udn.vn",
                    description: "",
                    image: "21IT243.jpg",
                },
                {
                    id: "21IT303",
                    name: "TRẦN QUANG",
                    date: "2003-03-29",
                    address: "Ha Noi",
                    phone: "0898639048",

                    email: "quangt.21it@vku.udn.vn",
                    description: "",
                    image: "21IT303.jpg",
                },
                {
                    id: "21IT643",
                    name: "VŨ MINH QUANG",
                    date: "12/12/2003",
                    address: "Ha Noi",
                    phone: "0375163291",

                    email: "quangvm.21it@vku.udn.vn",
                    description: "",
                    image: "21IT643.jpg",
                },
                {
                    id: "21IT307",
                    name: "NGUYỄN VĂN  SINH",
                    date: "2003-01-20",
                    address: "Ha Noi",
                    phone: "0935728145",

                    email: "sinhnv.21it@vku.udn.vn",
                    description: "",
                    image: "21IT307.jpg",
                },
                {
                    id: "21IT333",
                    name: "VÕ TRỌNG ĐẠT ",
                    date: "12/12/2003",
                    address: "Ha Noi",
                    phone: "0359941290",

                    email: "datvt.21it@vku.udn.vn",
                    description: "",
                    image: "21IT333.jpg",
                },
                {
                    id: "21IT303",
                    name: "TRẦN VIẾT ĐOÀN",
                    date: "2003-07-17",
                    address: "Ha Noi",
                    phone: "0799319645",

                    email: "doantv.21it@vku.udn.vn",
                    description: "",
                    image: "21IT303.jpg",
                },
                {
                    id: "21IT375",
                    name: "QUẢNG HOÀNG SƠN",
                    date: "2003-10-07",
                    address: "Ha Noi",
                    phone: "0971213792",
                    email: "sonqh.21it@vku.udn.vn",
                    description: "",
                    image: "21IT375.jpg",
                },
                {
                    id: "21IT652",
                    name: "TRÀ QUANG THẮNG",
                    date: "2003-04-13",
                    address: "Ha Noi",
                    phone: "0911916271",

                    email: "thangtq.21it@vku.udn.vn",
                    description: "",
                    image: "21IT652.jpg",
                },
            ], // Define your items data here
            items2: [
                {
                    id: "21IT658",
                    name: "NGUYỄN VĂN TRUNG",
                    date: "	2003-01-07",
                    address: "Ha Noi",
                    phone: "0932583717",
                    email: "trungnv.21it@vku.udn.vn",
                    description: "",
                    image: "21IT658.jpg",
                },
                {
                    id: "21IT400",
                    name: "LƯƠNG MINH Dũng",
                    date: "2003-01-06",
                    address: "Ha Noi",
                    phone: "0583152783",
                    email: "dunglm.21it@vku.udn.vn",
                    description: "",
                    image: "21IT400.jpg",
                },
                {
                    id: "21IT424",
                    name: "TỪ CÔNG MINH",
                    date: "2003-08-30",
                    address: "Ha Noi",
                    phone: "0931368443",
                    email: "minhtc.21it@vku.udn.vn",

                    description: "",
                    image: "21IT424.jpg",
                },
                {
                    id: "21IT434",
                    name: "	ĐẶNG NGỌC MẠNH NHẬT",
                    date: "2003-02-01",
                    address: "Ha Noi",
                    phone: "0382887406",
                    email: "nhatdnm.21it@vku.udn.vn	",
                    description: "",
                    image: "21IT434.jpg",
                },
                {
                    id: '21IT655',

                    name: "TRẦN CÔNG TIẾN",
                    date: "2003-06-04	",
                    address: "Ha Noi",
                    phone: "0382802406",
                    email: "tientc.21it@vku.udn.vn",
                    description: "",
                    image: "21IT655.jpg",
                },
                {
                    id: "21IT458",
                    name: "TRƯƠNG THANH	TÙNG",
                    date: "2003-10-18",
                    address: "Ha Noi",
                    phone: "0354723814",
                    email: "tungtt2.21it@vku.udn.vn",
                    description: "",
                    image: "21IT458.jpg",
                },
                {
                    id: "21IT662",
                    name: "NGUYỄN VĂN VIÊN",
                    date: "2002-10-16",
                    address: "Ha Noi",
                    phone: "0372695578",
                    email: "viennv.21it@vku.udn.vn",
                    description: "",
                    image: "21IT662.jpg",
                },
                {
                    id: "21IT469",
                    name: "NGUYỄN THÀNH	CÔNG",
                    date: "2003-09-21",
                    address: "Ha Noi",
                    phone: "0865049035",
                    email: "congnt.21it@vku.udn.vn",
                    description: "",
                    image: "21IT469.jpg",
                },
                {
                    id: "21IT476",
                    name: "LÊ VĂN HAI",
                    date: "2003-01-03",
                    address: "Ha Noi",
                    phone: "0819180877",

                    email: "hailv.21it@vku.udn.vn	",
                    description: "",
                    image: "21IT476.jpg",
                },
                {
                    id: "21IT607",
                    name: "LÊ VĂN HẠNH",
                    date: "2003-04-16",
                    address: "Ha Noi",
                    phone: "0705256624",

                    email: "hanhlv.21it@vku.udn.vn",
                    description: "",
                    image: "21IT607.jpg",
                },
                {
                    id: "21IT507",
                    name: "ĐINH VIỆT PHƯƠNG",
                    date: "2002-09-26",
                    address: "Ha Noi",
                    phone: "0855526902",

                    email: "phuongdv.21it@vku.udn.vn",
                    description: "",
                    image: "21IT507.jpg",
                },
                {
                    id: "21IT511	",
                    name: "PHAN XUÂN SỸ ",
                    date: "2003-09-29",
                    address: "Ha Noi",
                    phone: "0788641673",

                    email: "sypx.21it@vku.udn.vn",
                    description: "",
                    image: "21IT511	.jpg",
                },
                {
                    id: "21IT556",
                    name: "TRƯƠNG XUÂN KIÊN",
                    date: "2003-01-22",
                    address: "Ha Noi",
                    phone: "0799319645",

                    email: "kientx.21it@vku.udn.vn	",
                    description: "",
                    image: "21IT556.jpg",
                },
                {
                    id: "21IT566",
                    name: "NGUYỄN THỊ KIM NGÂN",
                    date: "2003-10-14",
                    address: "Ha Noi",
                    phone: "0333813580",
                    email: "nganntk.21it@vku.udn.vn",
                    description: "",
                    image: "21IT566.jpg",
                },
                {
                    id: "21IT581",
                    name: "TRẦN TẤN	TÀI",
                    date: "	2003-08-31",
                    address: "Ha Noi",
                    phone: "0389093655",

                    email: "taitt.21it@vku.udn.vn",
                    description: "",
                    image: "21IT581.jpg",
                },
                {
                    id: "21IT667",
                    name: "TỪ ĐÀM VĂN THIÊN",
                    date: "	2003-08-20",
                    address: "Ha Noi",
                    phone: "0398069880",
                    email: "thientdv.21it@vku.udn.vn",
                    description: "",
                    image: "21IT667.jpg",
                },
            ], // Define your items data here
            activeIndex: null,
            activeIndex2: null,
        };
    },
    methods: {
        handleClick(index) {
            console.log(index)
            this.activeIndex = index;
        },
        isActive(index) {
            return index === this.activeIndex;
        }
        ,
        handleClick2(index) {
            console.log(index)
            this.activeIndex2 = index;
        },
        isActive2(index) {
            return index === this.activeIndex2;
        }
    }
}


</script>

 