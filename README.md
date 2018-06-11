# webpack4.10.0

### 自定义element主题

####命令行主题工具
首先安装「主题生成工具」，可以全局安装或者安装在当前项目下，推荐安装在项目里，方便别人 clone 项目时能直接安装依赖并启动，这里以全局安装做演示。
```
npm i element-theme -g
```
在element-variables.scss文件中修改变量,例如修改主题色为红色。
```
$--color-primary: red;
```
编译主题,如果你想启用 `watch` 模式，实时编译主题，增加 -w 参数
```aidl
et -w
```
