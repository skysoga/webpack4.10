<template>
  <section class="side-nav" :class="{'collapse': isCollapse}">
    <div class="el-menu-toggle">
      <a @click="isCollapse = !isCollapse"><i class="el-icon-menu"></i></a>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :default-active="path"
      :collapse="isCollapse"
      :router="true"
      :collapse-transition="false"
    >

      <el-submenu index="site" v-if="menus.sys.show">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="i in menus.sys.nav" :index="i.path" :key="i.path">
            {{i.name}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="users" v-if="menus.order.show">
        <template slot="title">
          <i class="el-icon-info"></i>
          <span slot="title">客户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="i in menus.order.nav" :index="i.path" :key="i.path"><router-link :to="i.path">{{i.name}}</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="order" v-if="menus.users.show">
        <template slot="title">
          <i class="el-icon-refresh"></i>
          <span slot="title">交易管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="i in menus.users.nav" :index="i.path" :key="i.path">{{i.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="activity" v-if="menus.activety.show">
        <template slot="title">
          <i class="el-icon-date"></i>
          <span slot="title">活动管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="i in menus.activety.nav" :index="i.path" :key="i.path">{{i.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="report" v-if="menus.users.show">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">统计报表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="i in menus.users.nav" :index="i.path" :key="i.path">{{i.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </section>
</template>

<script>
export default {
  data () {
    return {
      menus: {
        sys: {
          show: true,
          nav: [
            {
              name: '网站管理',
              path: '/site/'
              // menus: {
              //   siteData: [
              //     {
              //       name: '热门彩种',
              //       path: '/lottery-hot'
              //     },
              //     {
              //       name: 'logo管理',
              //       path: '/logo-manage'
              //     },
              //     {
              //       name: '首页轮播',
              //       path: '/index-banner'
              //     },
              //     {
              //       name: '关于我们',
              //       path: '/index-banner'
              //     },
              //     {
              //       name: '帮助指南',
              //       path: '/help'
              //     },
              //     {
              //       name: '客服管理',
              //       path: '/service'
              //     },
              //     {
              //       name: '域名管理',
              //       path: '/domain-name-manage'
              //     },
              //     {
              //       name: 'APP管理',
              //       path: '/app-manage'
              //     }
              //   ]
              //
              // }
            }, {
              name: '支付管理',
              path: '/payment'
            }
          ]
        },
        users: {
          show: true,
          nav: [
            {
              name: '会员管理',
              path: 'members'
            },
            {
              name: '代理管理',
              path: 'agent'
            }, {
              name: '行政管理',
              path: 'administrative'
            }
          ]
        },
        order: {
          show: true,
          nav: [
            {
              name: '提现管理',
              path: 'present'
            }, {
              name: '充值管理',
              path: 'recharge'
            }, {
              name: '人工存提',
              path: 'manualDeal'
            }, {
              name: '投注记录管理',
              path: 'betRecord'
            }, {
              name: '交易记录查询',
              path: 'orderRecord'
            }
          ]
        },
        activety: {
          show: true,
          nav: [
            {
              name: '活动管理',
              path: 'avtivityManage'
            }, {
              name: '活动明细',
              path: 'avtivityDetail'
            }
          ]
        },
        reportForm: {
          show: true,
          nav: [
            {
              name: '综合报表',
              path: 'indexReport'
            }, {
              name: '代理报表',
              path: 'agentReport'
            }, {
              name: '会员报表',
              path: 'userReport'
            }, {
              name: '首充报表',
              path: 'firstDeal'
            }, {
              name: '彩种报表',
              path: 'lotteryReport'
            }, {
              name: 'termanalReport',
              path: 'avtivityDetail'
            }, {
              name: '等级报表',
              path: 'avtivityDetail'
            }
          ]
        }
      },
      isCollapse: false,
      path: ''
    }
  },
  created () {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  watch: {
    $route () {
      console.log(this.$route)
    }
  }
}
</script>

<style>
  @import "../../assets/css/variable.css";
.el-menu-toggle{
  height: 49px;
  line-height: 49px;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0,0,0,.2);
  margin-bottom: 1px;
  font-size: 18px;
}
.side-nav {
  width: 180px;
  position: fixed;
  left: 0;
  top: 0;
  margin-top: 50px;
  height: 100%;
  overflow: auto;
  transition: width 0.3s,transform 0.3s;
  border-right: solid 1px #e6e6e6;
  &.collapse {
    width: 64px;
  }
  & .el-submenu .el-menu-item{
    min-width: inherit;
  }
  & .el-menu {
    border-right: none;
  }
}
  .collapse + .frame_content{
    left: 64px;
  }
  .active {
    color: var(--color-blue-light);
  }
  .el-menu-item.is-active {
    background: #ecf5ff;
  }
</style>
