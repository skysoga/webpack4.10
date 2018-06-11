<template>
  <div class="panel">
    <div class="panel-heading">
      热门彩种
      <a class="margin-l10" @click="dialogVisible = true"><span class="el-icon-setting"></span></a>
      <div class="float-right panel-heading-right">
        <el-button
          size="small"
          type="primary"
          plain
        >
          保 存
        </el-button>
        <!--<el-button size="small" type="success" icon="plus" @click="catalogVisible = true">创建子部门</el-button>-->
      </div>
    </div>
    <div class="panel-body">
      <el-row>
        <el-col :span="20">
          <div class="media-object lottery-area">
            <div class="media-object-section lottery-selected shrink">
              <div class="mod-header">已选彩种</div>
              <ul class="margin-t">
                <li
                  v-for="l in lotterys"
                  v-dragging="{ item: l, list: lotterys, group: 'l' }"
                  :key="l.id">
                  <span title="上下拖动排序"><i class="fa fa-arrows"></i></span>
                  {{l.lotteryName}}
                  <a title="取消选择"><i class="el-icon-close"></i></a>
                </li>
              </ul>
            </div>
            <div class="media-object-section lottery-side-dish">
                <div class="mod-header margin-b">全部彩种</div>
                <ul>
                  <li v-for="l in allLottery" :key="l.id">{{l.lotteryName}}</li>
                </ul>
            </div>
          </div>
          <!--<div class="filters">-->
            <!--<el-button size="mini">删除</el-button>-->
          <!--</div>-->
          <!--<el-table-->
            <!--ref="multipleTable"-->
            <!--border-->
            <!--:data="tableData3"-->
            <!--tooltip-effect="dark"-->
            <!--style="width: 100%"-->
            <!--@selection-change="handleSelectionChange">-->
            <!--<el-table-column-->
              <!--type="selection"-->
              <!--width="55">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
              <!--label="日期"-->
              <!--width="120">-->
              <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
              <!--prop="name"-->
              <!--label="姓名"-->
              <!--width="120">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
              <!--prop="address"-->
              <!--label="地址"-->
              <!--show-overflow-tooltip>-->
            <!--</el-table-column>-->
          <!--</el-table>-->
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        lotterys: [
          {
            id:1,
            lotteryCode: 1024,
            lotteryName: '广东11选5',
            show: true,
            topBonus: '最高奖金',
            sort: 1
          }, {
            id:2,
            lotteryCode: 1025,
            lotteryName: '新疆时时彩',
            show: true,
            topBonus: '最高奖金',
            sort: 2
          }
        ],
        allLottery: [
          {
            id:1,
            lotteryCode: 1024,
            lotteryName: '广东11选5',
            show: true,
            topBonus: '最高奖金',
            sort: 1
          }, {
            id:2,
            lotteryCode: 1025,
            lotteryName: '新疆时时彩',
            show: true,
            topBonus: '最高奖金',
            sort: 2
          }, {
            id:3,
            lotteryCode: 1026,
            lotteryName: '广东11选5',
            show: true,
            topBonus: '最高奖金',
            sort: 3
          }, {
            id:4,
            lotteryCode: 1027,
            lotteryName: '新疆时时彩',
            show: true,
            topBonus: '最高奖金',
            sort: 4
          }, {
            id:5,
            lotteryCode: 1028,
            lotteryName: '新疆时时彩',
            show: true,
            topBonus: '最高奖金',
            sort: 5
          }
        ]
      }
    },
    mounted() {
      this.$dragging.$on('dragged', ({ value }) => {
        console.log(value)
      })
    }
  }
</script>
<style scoped>
  @import '../../assets/css/variable.css';
  .border-color-base {
    border: 1px solid #ebeef5;
  }
  .lottery-area{
    border: 1px solid #ebeef5;
    max-width: 1028px;
  }
  .lottery-selected {
    width: 60%;
    position: relative;
    padding: 1rem;
    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 1rem;
      border-right: 1px dashed #ddd;
      height: calc(100% - 4rem);

    }
    & ul {
      margin: 0;
    }
    & ul li {
      list-style: none;
      margin: 2px 0;
      padding: 6px 10px;
      font-size: 14px;
      background: #f9f9f9;
      color: var(--color-secondary);
      cursor: all-scroll;
      &.dragging {
        background: rgba(255,255,255, .8);
      }
      & span {
        margin-right: 6px;
      }
      & i.el-icon-close {
        float: right;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
  .lottery-side-dish {
    padding: 1rem;
    & ul {
      list-style: none;
      padding-bottom: 1rem;
      border-bottom: 1px dashed #f4f4f4;
      display: flex;
      flex-wrap: wrap;
      & li {
        padding: 3px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        width: 90px;
        font-size: 13px;
        text-align: center;
        margin-bottom: 6px;
        &:not(:nth-child(4n)){
          margin-right: 6px;
        }
      }
    }

  }
  .mod-header {
    font-size: 14px;
    font-weight: bold;
    color: var(--color-secondary);
  }
</style>
