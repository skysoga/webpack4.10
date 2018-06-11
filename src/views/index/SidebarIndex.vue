<template>
  <div>
    <side-nav></side-nav>
  	<div class="product-con">
  	  <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import SideNav from '@/components/SideNav'
  export default {
    data () {
      return {}
    },
    components: {
      SideNav
    }
  }
</script>
<style>
</style>

