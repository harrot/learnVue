
<template>
    <div class="test2">
        <span v-html="title"></span>
    </div>
</template>

<script>
    export default {
        name:'test2',

        data () {
            return {
               
                title: '<h1>Hello World 2</h1>',
             
            }
        },
       
    }
</script>
<!-- scoped limit CSS to this component only-->
<style scoped>
h1 {
  font-weight: normal;
  color: green;
}
</style>