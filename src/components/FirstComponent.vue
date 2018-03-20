
<template>
    <div class="test">
        <span v-html="title"></span>
        <p v-text="user.lastName + user.firstName"></p>
    </div>
</template>

<script>
    export default {
        name:'test',
    
        data () {
            return {
                title: '<h1>Hello World!</h1>',
                user: {
                    firstName : 'H',
                    lastName: 'X'
                }
            }
        }
    }
</script>
<!-- scoped limit CSS to this component only-->
<style scoped>
h1 {
  font-weight: normal;
  color: red;
}
</style>