(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{372:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"mvvm-数据驱动视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-数据驱动视图"}},[t._v("#")]),t._v(" MVVM 数据驱动视图")]),t._v(" "),s("p",[t._v("不再关注如何去操作 DOM，而更专注于数据和业务逻辑\n"),s("img",{attrs:{src:"https://img.imgdb.cn/item/6045b714cef1ec5e6f4e1dbb.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"响应式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式"}},[t._v("#")]),t._v(" 响应式")]),t._v(" "),s("h3",{attrs:{id:"object-defineproperty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty"}},[t._v("#")]),t._v(" Object.defineProperty")]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("对象每个属性都劫持监听")]),t._v(" "),s("li",[t._v("数组需在原型链上复写方法，拦截监听"),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arrProto "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\narrProto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("push")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发视图更新后再调用原型链上的 Array 的 push 方法")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" Proxy")]),t._v(" "),s("ul",[s("li",[t._v("优点：代理对象，对象的增删改都可监听")]),t._v(" "),s("li",[t._v("缺点：兼容性不好，且无法 Polyfill")])]),t._v(" "),s("h2",{attrs:{id:"nexttick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick"}},[t._v("#")]),t._v(" $nextTick")]),t._v(" "),s("ul",[s("li",[t._v("Vue 是异步渲染\n"),s("ul",[s("li",[t._v("data 改变之后，DOM 不会立刻渲染")]),t._v(" "),s("li",[t._v("页面渲染时会将 data 的修改做整合，一次性更新视图")]),t._v(" "),s("li",[t._v("减少 DOM 操作次数，提高性能")])])]),t._v(" "),s("li",[t._v("$nextTick 会在 DOM 渲染之后被触发，以获取最新 DOM 节点")])]),t._v(" "),s("h2",{attrs:{id:"生命周期相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期相关"}},[t._v("#")]),t._v(" 生命周期相关")]),t._v(" "),s("h3",{attrs:{id:"props-methods-data-computed-watch-的初始化顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props-methods-data-computed-watch-的初始化顺序"}},[t._v("#")]),t._v(" props methods data computed watch 的初始化顺序")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),s("p",[t._v("在 beforeCreate 和 created 之间进行初始化，它们的顺序为："),s("br"),t._v("\nprops -> methods -> data -> computed -> watch")])]),t._v(" "),s("p",[t._v("查看源码可以得知，在 new Vue 的时候，Vue 会进行初始化")]),t._v(" "),s("p",[t._v("vue/src/core/instance/index.js")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("initMixin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./init'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vue is a constructor and should be called with the `new` keyword'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Vue\n")])])]),s("p",[t._v("在 initMixin 的时候 this._init() 会被挂在 Vue 的原型上，其中，_init() 的方法中有一段代码")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_self "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initLifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initRender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeCreate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initInjections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve injections before data/props")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initProvide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve provide after data/props")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'created'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("进入 initState() 方法中，有那么一段非常清晰明确浅显易懂的代码")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMethods")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* asRootData */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("computed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initComputed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("computed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" nativeWatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initWatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue/src/core/util/env.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Firefox has a "watch" function onObject.prototype...')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nativeWatch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watch\n")])])]),s("h2",{attrs:{id:"性能相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能相关"}},[t._v("#")]),t._v(" 性能相关")]),t._v(" "),s("h3",{attrs:{id:"异步加载组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步加载组件"}},[t._v("#")]),t._v(" 异步加载组件")]),t._v(" "),s("p",[t._v("使用异步加载组件的方式，可以做到按需加载，在一些复杂的场景中，可以缩短渲染时间，提升用户体验")]),t._v(" "),s("ul",[s("li",[t._v("页面")]),t._v(" "),s("li",[t._v("子组件")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("asyncDemo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./asyncDemo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[t._v("#")]),t._v(" 面试题")]),t._v(" "),s("h3",{attrs:{id:"v-show-和-v-if-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show-和-v-if-的区别"}},[t._v("#")]),t._v(" v-show 和 v-if 的区别")]),t._v(" "),s("ul",[s("li",[t._v("v-show 通过 CSS 的 display 控制显示和隐藏")]),t._v(" "),s("li",[t._v("v-if 组件真正的渲染和销毁元素，而不是显示和隐藏")]),t._v(" "),s("li",[t._v("频繁切换显示状态用 v-show，否则用 v-if")])]),t._v(" "),s("h3",{attrs:{id:"为何-v-for-中要用-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为何-v-for-中要用-key"}},[t._v("#")]),t._v(" 为何 v-for 中要用 key")]),t._v(" "),s("ul",[s("li",[t._v("必须用 key，别整 random 或 index 这两个货色")]),t._v(" "),s("li",[t._v("diff 算法中会通过 tag 和 key 来判断 vnode 节点是否是同一个")]),t._v(" "),s("li",[t._v("减少渲染次数，提升渲染性能")]),t._v(" "),s("li",[t._v("v-for 不要和 v-if 一起使用（v-for 优先级比 v-if 高）")])]),t._v(" "),s("h3",{attrs:{id:"computed-和-watch-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-的区别"}},[t._v("#")]),t._v(" computed 和 watch 的区别")]),t._v(" "),s("ul",[s("li",[t._v("computed 会把计算结果缓存起来，相关的 data 数据不变则不会重新计算，提高性能")]),t._v(" "),s("li",[t._v("watch 一般用来监听数据的变化")]),t._v(" "),s("li",[t._v("computed 会先于 watch 进行初始化")])]),t._v(" "),s("h3",{attrs:{id:"为何组件-data-必须是一个函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为何组件-data-必须是一个函数"}},[t._v("#")]),t._v(" 为何组件 data 必须是一个函数")]),t._v(" "),s("p",[t._v("组件编译后实际上是一个 class，组件的使用相当于实例化")]),t._v(" "),s("p",[t._v("如果 data 是一个对象，那么其中一个实例对象对 data 修改，都会影响到其他实例对象")]),t._v(" "),s("p",[t._v("data 是函数的话就可以保证每个实例化对象都是独立的，不会相互影响")]),t._v(" "),s("h3",{attrs:{id:"多个组件有相同的逻辑-如何抽离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个组件有相同的逻辑-如何抽离"}},[t._v("#")]),t._v(" 多个组件有相同的逻辑，如何抽离？")]),t._v(" "),s("p",[t._v("使用 mixins 混入，mixins 的缺点是命名不能相同，否则会冲突，项目大的时候不易排查问题")]),t._v(" "),s("h3",{attrs:{id:"何时使用异步组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#何时使用异步组件"}},[t._v("#")]),t._v(" 何时使用异步组件？")]),t._v(" "),s("ul",[s("li",[t._v("加载复杂或者大组件时")]),t._v(" "),s("li",[t._v("路由异步加载")])]),t._v(" "),s("h3",{attrs:{id:"何时需要使用-keep-alive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#何时需要使用-keep-alive"}},[t._v("#")]),t._v(" 何时需要使用 keep-alive？")]),t._v(" "),s("p",[t._v("缓存组件，不需要重复渲染")]),t._v(" "),s("ul",[s("li",[t._v("多个静态 tab 页的切换")]),t._v(" "),s("li",[t._v("优化性能")])]),t._v(" "),s("h3",{attrs:{id:"何时需要使用-beforedestroy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#何时需要使用-beforedestroy"}},[t._v("#")]),t._v(" 何时需要使用 beforeDestroy")]),t._v(" "),s("ul",[s("li",[t._v("解绑自定义事件")]),t._v(" "),s("li",[t._v("清除定时器")]),t._v(" "),s("li",[t._v("解绑自定义的 DOM 事件，如 window scroll 等")])]),t._v(" "),s("h3",{attrs:{id:"template-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-是什么"}},[t._v("#")]),t._v(" template 是什么")]),t._v(" "),s("p",[t._v("相当于一种模板语法，不是单纯的 html，它还有着指令、表达式，循环判断这些能力")]),t._v(" "),s("p",[t._v("Vue 会把 template 编译成一个 render 函数，执行这个函数后会生成 VNode，也就是虚拟 DOM")]),t._v(" "),s("p",[t._v("（Vue3 在编译的时候做了一定的优化，对需要改变的地方打一个标记，比如插值、判断、循环，这样 diff 的时候只需要比对有标记的地方即可）")]),t._v(" "),s("h3",{attrs:{id:"描述组件渲染和更新的过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述组件渲染和更新的过程"}},[t._v("#")]),t._v(" 描述组件渲染和更新的过程")]),t._v(" "),s("h4",{attrs:{id:"渲染过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染过程"}},[t._v("#")]),t._v(" 渲染过程")]),t._v(" "),s("ul",[s("li",[t._v("解析模板为 render 函数（在开发环境就已经完成，vue-loader）")]),t._v(" "),s("li",[t._v("触发响应式，监听 data 属性 getter setter")]),t._v(" "),s("li",[t._v("执行 render 函数，生成 vnode，然后通过 patch(elem, vnode) 函数渲染在页面上")])]),t._v(" "),s("h4",{attrs:{id:"更新过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新过程"}},[t._v("#")]),t._v(" 更新过程")]),t._v(" "),s("ul",[s("li",[t._v("修改 data，触发 setter（此前在 getter 中已经被监听）")]),t._v(" "),s("li",[t._v("重新执行 render 函数，生成 newVnode")]),t._v(" "),s("li",[t._v("patch(vnode, newVnode) 通过 diff 对比拿到需要更新的节点，渲染到页面上")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.imgdb.cn/item/60478eb65aedab222ccad427.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"描述-vue-组件生命周期-有父子组件的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述-vue-组件生命周期-有父子组件的情况"}},[t._v("#")]),t._v(" 描述 Vue 组件生命周期（有父子组件的情况）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("页面加载渲染")]),t._v(" "),s("p",[t._v("beforeCreate -> created -> beforeMount -> [beforeCreate -> created - beforeMount -> mounted] -> mounted")])]),t._v(" "),s("li",[s("p",[t._v("子组件更新")]),t._v(" "),s("p",[t._v("beforeUpdate -> [beforeUpdate -> updated] -> updated")])]),t._v(" "),s("li",[s("p",[t._v("父组件更新")]),t._v(" "),s("p",[t._v("beforeUpdate -> updated")])]),t._v(" "),s("li",[s("p",[t._v("页面销毁")]),t._v(" "),s("p",[t._v("beforeDestroy -> [beforeDestroy -> destroyed] -> destroyed")])])]),t._v(" "),s("h3",{attrs:{id:"vue-组件如何通讯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件如何通讯"}},[t._v("#")]),t._v(" Vue 组件如何通讯")]),t._v(" "),s("h4",{attrs:{id:"父子组件间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父子组件间"}},[t._v("#")]),t._v(" 父子组件间")]),t._v(" "),s("ul",[s("li",[t._v("props 和 $emit")])]),t._v(" "),s("h4",{attrs:{id:"父子-兄弟-不相关组件间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父子-兄弟-不相关组件间"}},[t._v("#")]),t._v(" 父子/兄弟/不相关组件间")]),t._v(" "),s("ul",[s("li",[t._v("Vuex")]),t._v(" "),s("li",[t._v("Vue 本身就具备自定义事件的能力"),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// event.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// xxx1.vue")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./event.js'")]),t._v("\nevent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onChange'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发自定义事件")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// xxx2.vue")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./event.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onChange'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("changeValueHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听自定义事件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeValueHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforDestroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$off")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onChange'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("changeValueHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解绑事件，以免内存泄漏")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("EventBus")])]),t._v(" "),s("h3",{attrs:{id:"双向数据绑定-v-model-的实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双向数据绑定-v-model-的实现原理"}},[t._v("#")]),t._v(" 双向数据绑定 v-model 的实现原理")]),t._v(" "),s("p",[t._v("就输入框而言，在编译 template 的时候，会给输入框绑定一个 input 事件，实时更新 value，从而达到数据的双向绑定")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("input 元素的 value = this.name")])]),t._v(" "),s("li",[s("p",[t._v("绑定 input 事件 this.name = $event.target.value")])]),t._v(" "),s("li",[s("p",[t._v("data 更新触发 re-render")])]),t._v(" "),s("li",[s("p",[t._v("修饰符：")]),t._v(" "),s("ul",[s("li",[t._v("v-model.trim 去除前后空格")]),t._v(" "),s("li",[t._v("v-model.lazy 防抖")]),t._v(" "),s("li",[t._v("v-model.number 转换为数字")])])])]),t._v(" "),s("h3",{attrs:{id:"vue-router-两种路由模式的区别和原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-两种路由模式的区别和原理"}},[t._v("#")]),t._v(" Vue-Router 两种路由模式的区别和原理")]),t._v(" "),s("ul",[s("li",[t._v("hash\n"),s("ul",[s("li",[t._v("监听 window.onhashchange 事件，浏览器会记录 hash 变化")]),t._v(" "),s("li",[t._v("刷新，hash 不会提交到服务端")])])]),t._v(" "),s("li",[t._v("history\n"),s("ul",[s("li",[t._v("history.pushState 切换路由")]),t._v(" "),s("li",[t._v("window.onpopstate 监听路由")]),t._v(" "),s("li",[t._v("需要服务端配合，否则刷新后会 404")])])])]),t._v(" "),s("h3",{attrs:{id:"基于-vue-设计一个购物车-组件结构-vuex-state-数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-vue-设计一个购物车-组件结构-vuex-state-数据结构"}},[t._v("#")]),t._v(" 基于 Vue 设计一个购物车（组件结构，Vuex state 数据结构）")]),t._v(" "),s("h3",{attrs:{id:"diff-算法的时间复杂度是如何优化到-o-n-的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法的时间复杂度是如何优化到-o-n-的"}},[t._v("#")]),t._v(" diff 算法的时间复杂度是如何优化到 O(n) 的？")]),t._v(" "),s("ul",[s("li",[t._v("只比较同一层级，不跨级比较")]),t._v(" "),s("li",[t._v("tag 不相同，则直接删掉重建，不再深度比较")]),t._v(" "),s("li",[t._v("tag 和 key，两者都相同，则认为是相同节点，不再深度比较")])]),t._v(" "),s("h3",{attrs:{id:"请用-vnode-描述一个-dom-结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请用-vnode-描述一个-dom-结构"}},[t._v("#")]),t._v(" 请用 vnode 描述一个 DOM 结构")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("text"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token style-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token style language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("a"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-json5 extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json5"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'container'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ul'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'font-size: 20px'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);