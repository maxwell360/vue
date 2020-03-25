<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "App"
};
</script>

<style lang="scss">
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  background-color: $dark-blue;
  padding: 0px;
  margin: 0px;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h4 {
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: $white;
  margin: 0;
}

input {
  border-radius: 4px;
  height: 56px;
  width: calc(100% - 23px);

  font-size: 20px;
  padding-left: 20px;
  margin-top: 20px;
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 4px;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
}

a {
  text-decoration: none;
}

/* THEME */

.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-link {
  color: white;
}

.dark-link {
  color: black;
}
</style>
