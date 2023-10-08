import axios from 'axios';
<script>
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
          id: "21IT107",

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
          id: "21IT655",

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
      ],
    };
  },
};
</script>

<template>
  <section class="about-section">
    <div class="header-about">
      <h1>About Us</h1>
      <p>We're family from VKU University at Da Nang city</p>
    </div>
    <div class="main-about">
      <div class="about-img">
        <img src="./../assets/main.jpg" alt="" />
      </div>
      <div class="about-content">
        <h2>Class K-IT from VKU</h2>
        <p>
          We're family from VKU University at Da Nang city. We're family from
          VKU University at Da Nang city.
        </p>
      </div>
    </div>
    <div class="member-about" style="margin-top: 300px; ;">
      <div class="container" v-for="(item, index) in items" :key="index">
        <div class="image-section">
          <img
            class="img-1"
            :src="'https://cdn.vku-udn.edu.vn/daotao/sinhvien/' + item.image"
            :alt="'ảnh của ' + item.name"
          />
        </div>
        <div class="text-content">
          <span>Manohar Yadav</span>
          <span> 💻Softwere Engineer💻</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            unde mollitia reiciendis impedit iusto obcaecati similique omnis
            nostrum, fugit quaerat.
          </p>

          <div class="social-media">
            <router-link to="/"> <i class="pi pi-instagram"></i></router-link>
            <router-link to="/"> <i class="pi pi-facebook"></i></router-link>

            <router-link to="/"><i class="pi pi-github"></i></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
section {
  padding: 100px 10%;
}
.about-section {
  background: url("./../assets/background.jpg");
  background-repeat: no-repeat;
}
.header-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header-about h1 {
  font-size: 50px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
  text-decoration: underline;
}
.main-about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
}
.main-about .about-img {
  width: 500px;
  height: 500px;
}
.main-about .about-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.member-about {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 50px; 
}
.container {
  height: 430px;
  width: 300px;
  border: 2px solid;
  border-left-color: #0cf;
  border-right-color: #0cf;
  border-top-color: #385aef;
  border-bottom-color: #385aef;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.container .image-section {
  height: 100%;
  width: 100%;
  background: linear-gradient(rgb(29, 119, 235), #385aef, rgb(50, 109, 237), #385aef);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.6s ease;
  overflow: hidden;
}

.container:hover .image-section {
  top: 5%;
  height: 280px;
  width: 280px;
  border-radius: 50%;
}

img {
  width: 250px;
  border-radius: 50%;
  background: #021a2f;
}

.text-content {
  text-align: center;
  color: #000;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 40%;
  opacity: 0;
  transition: 0.5s;
}

.container:hover .text-content {
  opacity: 1;
  transition-delay: 0.5s;
}

.text-content span:nth-child(1) {
  letter-spacing: 1px;
  font-size: 32px;
}

.container:hover span:nth-child(1) {
  animation: TopSlide 1s ease forwards;
  opacity: 0;
}

@keyframes TopSlide {
  0% {
    transform: translateY(200px);
    opacity: 0;
    filter: blur(5px);
  }

  100% {
    transform: translateY(00px);
    opacity: 1;
    filter: blur(0);
  }
}

.text-content span:nth-child(2) {
  letter-spacing: 1px;
  font-size: 18px;
  margin-bottom: 5px;
}

.container:hover span:nth-child(2) {
  animation: TopSlide 1s ease forwards;
  opacity: 0;
  animation-delay: 0.2s;
}

.text-content p {
  font-size: 13px;
  max-width: 300px;
  margin-bottom: 10px;
}

.container:hover p {
  animation: TopSlide 1s ease forwards;
  opacity: 0;
  animation-delay: 0.4s;
}

.btn {
  height: 35px;
  width: 100px;
  font-size: 15px;
  font-weight: 500;
  background: #222;
  color: #0cf;
  border: 2px solid #0cf;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 5px;
  transition: 0.5s;
}

.social-media {
  display: flex;
}

.social-media i {
  cursor: pointer;
  height: 40px;
  width: 40px;
  border: 2px solid #0cf;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #0cf;
  margin-left: 20px;
  transition: 0.4s;
  animation: TopSlide 1s ease forwards;
  opacity: 0;
  animation-delay: 0.8s;
}

.container:hover .social-media {
  animation: TopSlide 1s ease forwards;
  opacity: 0;
  animation-delay: 0.8s;
}

.social-media i:hover {
  box-shadow: 0 0 10px #0cf;
  color: #222;
  background: #0cf;
}
@media (max-width: 756px) {
  .main-about .about-img {
    width: 400px;
    height: 400px;
  }
  .main-about {
    flex-direction: column;
  }
  .main-about .about-content {
    margin-top: 20px;
    margin-left: 20px;
  }
}
</style>
