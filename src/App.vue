<template>
    <div id="app">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js Template example'
    }
  }
}
</script>
<!-- scoped limit CSS to this component only-->
<style scoped>
h1 {
  font-weight: normal;
  color: black;
}
</style>