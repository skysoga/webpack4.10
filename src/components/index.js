import Vue from 'vue'
// import { camelToKebab } from '@/utils'
// 拖拉组件
import VueDnd from 'awe-dnd'
// element 组件 + 自定义全局组件
import {
  Form,
  FormItem,
  Input,
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tooltip,
  Table,
  TableColumn,
  Row,
  Col } from 'element-ui'

const components = {
  Form,
  FormItem,
  Input,
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tooltip,
  Table,
  TableColumn,
  Row,
  Col,
  VueDnd
}
Object.values(components).forEach(i => Vue.use(i))

// export default {
//   install (Vue, opts = {}) {
//     // Object.values(components).forEach(comp => Vue.component(comp.name, comp))
//     Object.entries(components).forEach(([k, v]) => Vue.component(camelToKebab(k), v))
//     // for (let [k, v] of Object.entries(components)) {
//     //   Vue.component(camelToKebab(k), v)
//     // }
//   }
// }

