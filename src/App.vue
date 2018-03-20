<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <test></test>
    </div>
</template>

<script>
import Test from './components/FirstComponent'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue and Webpack example with component'
    }
  },
  components:{Test}
}
</script>
<!-- scoped limit CSS to this component only-->
<style scoped>
h1 {
  font-weight: normal;
  color: black;
}
</style>