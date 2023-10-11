<script>
import axios from "axios";
import { mapActions } from "vuex";
import ButtonPreloader from "./../../components/preloader/ButtonPreloader.vue";

export default {
  components: { ButtonPreloader },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      emailLogin: "",
      passwordLogin: "",
      isShowSignup: false,
      showPassword: false,
      userCreated: false,
      email_error: "",
      validator: false,
      errorMessage: "",
      errorName: "",
      userLoggedIn: false,
      callback: (response) => {
        console.log(response);
      },
    };
  },
  methods: {
    showMessage(content, type, pos) {
      Toast.open({
        message: content,
        type: type,
        duration: 2000,
        position: pos,
      });
    },
    ...mapActions(["set_user"]),
    toggleSignup() {
      (this.errorMessage = ""), (this.errorName = "");
      this.isShowSignup = !this.isShowSignup;
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    validateName(name) {
      if (name.length === 0) {
        this.errorName = "Vui lòng nhập tên";
        return false;
      } else {
        this.errorName = "";
        return true;
      }
    },
    async registerUser(event) {
      event.preventDefault();
      console.log(event.target[1].value);
      if (
        !this.validateName(event.target[0].value) ||
        !this.validateEmail(event.target[1].value)
      ) {
        return;
      }
      if (!this.validatePassword()) {
        this.validator = false;
        this.email_error = "Mật khẩu không hợp lệ";

        return;
      }

      console.log(123);

      this.userCreated = true;
      await axios({
        method: "post",
        url: "https://combative-frock-lion.cyclic.cloud/api/v1/auth/register/",
        data: {
          name: this.name,
          email: this.email,
          password: this.password,
        },
      })
        .then((res) => {
          if (res.status == 201) {
            this.userCreated = false;
            this.isShowSignup = !this.isShowSignup;
            this.validator = false;
          } else {
            throw res;
          }
        })
        .catch((err) => {
          console.log(err);
          this.userCreated = false;
          this.email_error = err.response.data.email;
        });
    },
    async loginUser(event) {
      event.preventDefault();

      if (!this.validateEmail(event.target[0].value)) {
        return;
      }
      if (!this.validatePassword()) {
        this.validator = false;
        this.email_error = "Mật khẩu không hợp lệ";
        return;
      }
      this.userLoggedIn = true;

      let data = {
        email: this.email,
        password: this.password,
      };
      console.log(data);
      await axios({
        method: "post",
        url: "https://combative-frock-lion.cyclic.cloud/api/v1/auth/login",
        data: {
          email: this.email,
          password: this.password,
        },
      }).then((res) => {
        if (res.status == 401) {
          this.showMessage(res.data.message, "infor", "top");
          this.userLoggedIn = false;
        } else if (res.status == 200) {
          this.userLoggedIn = false;
          this.$store.dispatch("set_user", res.data);
          this.showMessage("Đăng nhập thành công", "success", "top-right");
          this.$router.push({ name: "dashboard" });
        } else {
          this.userLoggedIn = false;

          this.$toast.open({
            message: res.data.message,
            type: "error",
            duration: 2000,
            position: "top",
          });
        }
      });
      console.log(123);
      // this.$store
      //     .dispatch('loginUser', {
      //         email: this.emailLogin,
      //         password: this.passwordLogin
      //     })
      //     .then(() => {
      //         this.$router.push({ name: 'Home' });
      //     })
      //     .catch((error) => {
      //         console.log(error);
      //     });
    },
    validatePassword() {
      if (this.password.length === 0) {
        // this.validator = false;
        // this.errorMessage = 'Vui lòng nhập mật khẩu';
        return false;
      } else {
        this.validator = true;
        if (this.password.length >= 8) {
          this.errorMessage = "strong";
        } else if (this.password.length >= 4 && this.password.length < 8) {
          this.errorMessage = "medium";
        } else if (this.password.length < 4) {
          this.errorMessage = "weak";
        }
        return true;
      }
    },
    validateEmail(email) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.email_error = "";
        return true;
      } else {
        this.email_error = "Email không hợp lệ";
        return false;
      }
    },
    onGoogleClick() {
      const googleLoginUrl = "https://combative-frock-lion.cyclic.cloud";
      console.log(googleLoginUrl + "/api/v1/auth/google");
      window.open(googleLoginUrl + "/api/v1/auth/google", "_self");
    },
  },
  watch: {
    password() {
      this.validatePassword();
    },
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
  },
};
</script>
<template>
  <section class="container forms" :class="{ 'show-signup': isShowSignup }">
    <div class="form login">
      <div class="form-content">
        <header>Đăng nhập</header>
        <form @submit.prevent="loginUser">
          <div class="field input-field">
            <input
              type="email"
              placeholder="Email"
              class="input"
              v-model="email"
            />
          </div>
          <div class="field input-field">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              @keyup="validatePassword"
              class="password"
              v-model="password"
            />
            <i
              class="pi pi-eye eye-icon"
              @click="togglePassword"
              v-if="showPassword"
            ></i>
            <i
              class="pi pi-eye-slash eye-icon"
              v-else
              @click="togglePassword"
            ></i>
          </div>

          <div v-if="email_error" style="color: red">
            <p>
              {{ email_error }}
            </p>
          </div>
          <div class="form-link">
            <a href="#" class="forgot-pass">Quên mật khẩu password?</a>
          </div>
          <div class="field button-field">
            <button>
              <button-preloader v-if="userLoggedIn" />
              <span v-else style="color: #fff">Đăng nhập</span>
            </button>
          </div>
        </form>
        <div class="form-link">
          <span
            >Bạn chưa có tài khoản?
            <a
              style="cursor: pointer"
              @click="toggleSignup()"
              class="link signup-link"
              >Đăng ký</a
            ></span
          >
        </div>
      </div>
      <div class="line"></div>
      <div class="media-options">
        <a href="#" class="field facebook">
          <img
            src="./../../assets/icons/facebook.svg"
            alt=""
            class="google-img"
          />
          <span>Login with Facebook</span>
        </a>
      </div>
      <div class="media-options">
        <button
          style="cursor: pointer"
          class="field google"
          @click="onGoogleClick()"
        >
          <img src="./../../assets/google.png" alt="" class="google-img" />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
    <!-- Signup Form -->
    <div class="form signup">
      <div class="form-content">
        <header>Đăng ký</header>
        <form @submit.prevent="registerUser">
          <div class="field input-field">
            <input
              type="text"
              placeholder="Họ và tên"
              class="input"
              v-model="name"
            />
          </div>
          <div class="field input-field">
            <input
              type="email"
              placeholder="Email"
              class="input"
              v-model="email"
            />
          </div>
          <div class="field input-field">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Nhập mật khẩu"
              class="password"
              v-model="password"
              @keyup="validatePassword"
            />
            <i
              class="pi pi-eye eye-icon"
              @click="togglePassword"
              v-if="showPassword"
            ></i>
            <i
              class="pi pi-eye-slash eye-icon"
              v-else
              @click="togglePassword"
            ></i>
          </div>
          <div v-if="email_error" style="color: red">
            <p>
              {{ email_error }}
            </p>
          </div>
          <div v-if="errorName" style="color: red">
            <p>
              {{ errorName }}
            </p>
          </div>
          <div
            v-if="errorMessage"
            class="strength-validation"
            :class="validator ? errorMessage : ''"
          >
            <p>Password strength is {{ errorMessage }}</p>
          </div>

          <div class="field button-field">
            <button>
              <button-preloader v-if="userLoggedIn" />
              <span v-else style="color: #fff">Đăng Ký</span>
            </button>
          </div>
        </form>
        <div class="form-link">
          <span
            >Bạn đã có tài khoản?
            <a @click="toggleSignup()" href="#" class="link login-link"
              >Đăng nhập</a
            ></span
          >
        </div>
      </div>
      <div class="line"></div>
      <div class="media-options">
        <a href="#" class="field facebook">
          <img
            src="./../../assets/icons/facebook.svg"
            alt=""
            class="google-img"
          />
          <span>Login with Facebook</span>
        </a>
      </div>
      <div class="media-options">
        <a href="#" class="field google">
          <img
            src="./../../assets/google.png"
            alt=""
            class="google-img"
            @click="onGoogleClick()"
          />
          <span>Login with Google</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4070f4;
  column-gap: 30px;
}
.form {
  position: absolute;
  max-width: 430px;
  width: 100%;
  padding: 30px;
  border-radius: 6px;
  background: #fff;
}
.form.signup {
  opacity: 0;
  pointer-events: none;
}
.forms.show-signup .form.signup {
  opacity: 1;
  pointer-events: auto;
}
.forms.show-signup .form.login {
  opacity: 0;
  pointer-events: none;
}
header {
  font-size: 28px;
  font-weight: 600;
  color: #232836;
  text-align: center;
}
form {
  margin-top: 30px;
}
.form .field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 6px;
}
.field input,
.field button {
  height: 100%;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
}
.field input {
  outline: none;
  padding: 0 15px;
  border: 1px solid#CACACA;
}
.field input:focus {
  border-bottom-width: 2px;
}
.eye-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #8b8b8b;
  cursor: pointer;
  padding: 5px;
}
.strength-validation {
  display: block;
  margin-top: 6px;
  font-size: 13px;
}
.field button {
  color: #fff;
  background-color: #0171d3;
  transition: all 0.3s ease;
  cursor: pointer;
}
.field button:hover {
  background-color: #016dcb;
}
.form-link {
  text-align: center;
  margin-top: 10px;
}
.form-link span,
.form-link a {
  font-size: 14px;
  font-weight: 400;
  color: #232836;
}
.form a {
  color: #0171d3;
  text-decoration: none;
}
.form-content a:hover {
  text-decoration: underline;
}
.line {
  position: relative;
  height: 1px;
  width: 100%;
  margin: 36px 0;
  background-color: #d4d4d4;
}
.line::before {
  content: "Or";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: #8b8b8b;
  padding: 0 15px;
}
.media-options a {
  display: flex;
  align-items: center;
  justify-content: center;
}
a.facebook {
  color: #fff;
  background-color: #4267b2;
}
a.facebook span {
  font-weight: 500;

  color: #fff;
}
a.facebook .facebook-icon {
  height: 28px;
  width: 28px;
  color: #0171d3;
  font-size: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.facebook-icon,
img.google-img {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
}
img.google-img {
  height: 20px;
  width: 20px;
  object-fit: cover;
}
a.google {
  border: 1px solid #cacaca;
}
a.google span {
  font-weight: 500;
  opacity: 0.6;
  color: #232836;
}
@media screen and (max-width: 400px) {
  .form {
    padding: 20px 10px;
  }
}
</style>