<template>
  <div class='home-container'>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                msg: ''
            }
        },
        components: {},
        methods: {},
        computed: {},
        created() {
        }
    }
</script>

<style lang="scss">

</style>