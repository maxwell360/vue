<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <Notification v-if="hasText" v-bind:text="text" />
    <RequestAccount />
    <div class="login">
      <img src="@/assets/logo.png" />
      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign into Schlieselotte.io</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
          v-model="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
          v-model="password"
          required
        />
        <button>Sign In</button>
      </form>

      <router-link
        to="/recover"
        :class="{'light-link': isDarkMode, 'dark-link' : !isDarkMode}"
      >Forgot your password?</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import { auth } from "@/main.js";
import Notification from "@/components/Notification.vue";

export default {
  name: "SignIn",
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification
  },
  methods: {
    // Other methods, separated with commas

    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password, true)
        .then(this.$router.replace("/"))
        .catch(error => {
          alert("Error: " + error);
        });
    }
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out!";
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  .login {
    width: 400px;
  }
}
</style>
