
<template>
    <div class="c1">
        <h1> {{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name:'c1',
        data () {
            return {
                msg: "Hello first Vue Component!"
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