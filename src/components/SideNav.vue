<template>
  <div class="product-navbar">
    <div class="accordion-header">内容管理</div>
    <div class="accordion-list">
      <ul>
        <router-link
          v-for="(o, index) in menuItems.site"
          :key="index"
          tag="li"
          :to="o.path"
          exact>
          {{o.name}}
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menuItems: {
          site: [
            {
              name: "热门彩种",
              path: 'lottery'
            }, {
              name: "logo管理",
              path: 'logo'
            }, {
              name: "首页轮播",
              path: 'banner'
            }, {
              name: "关于我们",
              path: 'about'
            }, {
              name: "帮助指南",
              path: 'help'
            }, {
              name: "客服管理",
              path: 'service'
            }, {
              name: "域名管理",
              path: 'domain'
            }
          ]
        }
      }
    },

    methods: {

    }
  }
</script>
<style>
  @import '../assets/css/variable.css';
.product-navbar{
  background: #fcfcfc;
  position: absolute;
  height: calc(100vh - 50px);
  width: 180px;
  transition: width .3s;
  box-shadow: 0 0 1px rgba(3,3,3,.15);
}
.accordion-header{
    font-size: 14px;
    line-height: 50px;
    text-align: center;

    font-weight: bold;
    background: #e3ebf5;
    overflow: hidden;
    height: 50px;
    transition: opacity .2s .1s;
}
.accordion-list {
  background: none;
  border: none;
  margin-top: 3px;
  & li {
    list-style: none;
    padding: 0 1.5rem;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    &.active {
      background: var(--color-white);
    }
  }
}
</style>
