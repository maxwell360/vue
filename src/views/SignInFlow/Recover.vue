<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <RequestAccount />
    <div class="login">
      <img src="@/assets/logo.png" />
      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Recover Account</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
          v-model="email"
          required
        />
        <button>Send E-Mail</button>
      </form>

      <router-link
        to="/signIn"
        :class="{'light-link': isDarkMode, 'dark-link' : !isDarkMode}"
      >Already have an account. Sign in now.</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import { auth } from "@/main.js";

export default {
  name: "Recover",
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  components: {
    RequestAccount,
    ThemeSwitch
  },
  methods: {
    // Other methods, separated with commas

    onSubmit() {
      const email = this.email;

      auth.requestPasswordRecovery(email).then(() => {
        this.$router.push({
          name: "signIn",
          params: {
            userRecoveredAccount: true,
            email: email
          }
        });
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
