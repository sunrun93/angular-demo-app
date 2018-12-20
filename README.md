# Angular项目综合实战
最近因为项目的需要在学习angular，为了督促自己学习，开始此篇文档的更新，主要记录自己的学习过程，望自己能坚持下去。[项目源码Github](https://github.com/sunrun93/angular-demo-app)
## 1. angular的路由机制
angular在核心组件中为我们提供了router模块，项目中以一个小的例子入手，尝试构建如下的简单的路由结构：
1. Tab A
    * waterfall
    * todo
2. Tab B
3. Tab C
4. Tab D
首先，在app文件目录下新建app-routing.module,并将其引入到app.module模块中。在app-routing.module中定义对应的路由：
```
export const router: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/tab_a/water_fall' },
  {
    path: 'tab_a', 
    component: TabAComponent, 
    children: [
      { path: '',pathMatch: 'prefix', redirectTo: 'water_fall'},
      { path: 'water_fall', component: WaterFallComponent },
      { path: 'todo', component: TestComponent }
    ]
  },
  { path: 'tab_b/:id', component: TabBComponent }
];
```

