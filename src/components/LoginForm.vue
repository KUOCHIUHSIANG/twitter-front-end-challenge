<template>
  <div class="card">
    <div class="form-title">
      <div class="form-title-icon">
        <img src="../assets/icon/logo.svg" alt="" srcset="" />
      </div>
      <div v-if="isAdminLogin" class="form-title-text">後台登入</div>
      <div v-else class="form-title-text">登入 Alphitter</div>
    </div>
    <div class="form-wrapper">
      <div class="input-gp">
        <label class="input-label">帳號</label>
        <input v-model="account" type="text" class="input-field" required @click="errorMessage = ''" />
        <div class="input-line line" :class="{error: errorMessage === 'account' }"></div>
        <span v-show="errorMessage === 'account'" class="input-warning">不可有空欄位</span>
      </div>
      <div class="input-gp">
        <label class="input-label">密碼</label>
        <input
          v-model="password"
          type="password"
          class="input-field"
          required
          @click="errorMessage = ''"
        />
        <div class="input-line line" :class="{error: errorMessage === 'password' }"></div>
        <span v-show="errorMessage === 'password'" class="input-warning">不可有空欄位</span>
      </div>
    </div>
    <button
      class="btn btn-orange"
      :disabled="isProcessing"
      @click.stop.prevent="handleSubmit"
    >
      登入
    </button>
    <div v-if="isAdminLogin" class="link-group">
      <router-link to="/user/login" class="link">前台登入</router-link>
    </div>
    <div v-else class="link-group">
      <router-link to="/user/regist" class="link">註冊 Alphitter</router-link>
      <span class="link-dot">・</span>
      <router-link to="/admin/login" class="link">後台登入</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    initIsProcessing: {
      type: Boolean,
      required: true,
    },
    needClearPassword: {
      type: Boolean,
    },
  },
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false,
      isAdminLogin: false,
      errorMessage: "pending"
    };
  },
  computed: {
    ...mapState(["currentPathName"]),
  },
  watch: {
    initIsProcessing(newValue) {
      this.isProcessing = newValue;
    },
    needClearPassword() {
      this.password = ''
    },
  },
  methods: {
    handleSubmit() {
      if (!this.account.trim()) {
        return this.errorMessage = "account"
      } else if (!this.password.trim()) {
        return this.errorMessage = "password"
      }
      this.errorMessage = ""
      this.$emit("after-form-submit", this.account, this.password);
    },
  },
  created() {
    if (this.$route.name === "admin-login") {
      this.isAdminLogin = true;
    } else if (this.$route.name === "user-login") {
      this.isAdminLogin = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.card {
  max-width: 540px;
  border: 0;
  margin: auto;
  margin-top: 65px;
}

.form-title {
  align-self: center;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-icon {
    width: 50px;
    height: 50px;
  }
  &-text {
    margin-top: 20px;
    font-size: 23px;
    font-weight: 700;
  }
}

.link-group {
  align-self: flex-end;
  margin-top: 20px;
}
.link-dot {
  color: $link-blue;
}

</style>
