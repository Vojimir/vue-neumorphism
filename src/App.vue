<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layouts/Header";

export default {
  components: {
    Header,
  }
};
</script>

<style >

@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");

* {
  font-family: "Quicksand", sans-serif;
  margin: 0;
}
</style>