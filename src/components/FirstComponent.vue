
<template>
    <div class="test">
        <span v-html="title"></span>
        <input type="text" v-model="user.firstName">
        <p v-if="showLast">{{user.lastName+user.firstName}}</p>
        <p v-else>{{user.firstName}}</p>
        <p v-text="title"></p>
        <li v-for="item in items">{{item.title}}</li>
        <button v-on:click="hello('Hello World')">Hello</button>
        <br/>
        <p>{{justName}}</p> 
        <p>{{prop1}}</p>
    </div>
</template>

<script>
    export default {
        name:'test',
        props: {
            prop1: {
                type: String,
                default: 'anyString'
            }
        },
        data () {
            return {
                showLast: false,
                title: '<h1>Hello World!</h1>',
                user: {
                    firstName : 'H',
                    lastName: 'X'
                },
                items: [
                    {title: 'item 1'},
                    {title: 'item 2'},
                    {title: 'item x'}
                ]
            }
        },
        methods:{
            hello: function(arg) {
                alert(arg);
            }
        },
        computed: {
            justName: function() {
                return this.user.firstName + this.user.lastName;
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