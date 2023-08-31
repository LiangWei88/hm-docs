import{_ as e,o as t,c as o,V as a}from"./chunks/framework.956eca13.js";const i="/hm-docs/assets/image-20210830114836045.a2898b5a.png",m=JSON.parse('{"title":"《极客园移动端项目》","description":"","frontmatter":{},"headers":[],"relativePath":"geek-park/index.md","filePath":"geek-park/index.md","lastUpdated":1693489855000}'),l={name:"geek-park/index.md"},r=a('<h1 id="《极客园移动端项目》" tabindex="-1">《极客园移动端项目》 <a class="header-anchor" href="#《极客园移动端项目》" aria-label="Permalink to &quot;《极客园移动端项目》&quot;">​</a></h1><p><strong>项目介绍：</strong>「极客园」对标<code>CSDN</code>、<code>博客园</code>等竞品，致力成为更加贴近年轻 IT 从业者（学员）的科技资讯类应用 ，产品关键词：IT、极客、活力、科技、技术分享、前沿动态、内容社交 ，用户特点：年轻有活力，对 IT 领域前言科技信息充满探索欲和学习热情</p><p><strong>负责模块：</strong> 短信登录、退出功能 ， token 的拦截与过期处理， 个人中心 ，即时通讯（小智同学）频道管理 文章搜索 文章展示 评论与回复</p><p><strong>主要职责：</strong></p><ul><li>基于 react + hooks + typescript + antd-mobile + Redux 环境开发项目</li><li>使用拦截器处理用户 token 过期以及刷新 token，自定义通用组件拦截未登录用户</li><li>使用 websocket 完成小智同学功能</li><li>使用 localStorage 以及 redux 完成频道管理模块</li><li>负责文章搜索模块，使用 ahooks 库完成函数防抖，优化性能</li><li>封装 KeepAlive， AuthRoute 组件，实现首页的缓存，记录访问的位置。</li></ul><h2 id="功能演示" tabindex="-1">功能演示 <a class="header-anchor" href="#功能演示" aria-label="Permalink to &quot;功能演示&quot;">​</a></h2><blockquote><p>目标：了解极客园移动端项目的主要界面布局和本课程中需要实现的功能点</p></blockquote><ul><li>效果演示地址：<a href="http://geek.itheima.net/" target="_blank" rel="noreferrer">http://geek.itheima.net/</a></li><li>项目接口文档：<a href="http://geek.itheima.net/api.html" target="_blank" rel="noreferrer">http://geek.itheima.net/api.html</a></li></ul><img src="'+i+'" alt="image-20210830114836045" style="zoom:50%;"><h2 id="项目技术栈" tabindex="-1">项目技术栈 <a class="header-anchor" href="#项目技术栈" aria-label="Permalink to &quot;项目技术栈&quot;">​</a></h2><blockquote><p>目标：了解开发本项目所要使用的各类框架、库</p></blockquote><p>技术栈：</p><ul><li><p>项目搭建：React 官方脚手架 <code>create-react-app</code></p></li><li><p>编程语言：<code>Typescript</code></p></li><li><p>组件编写方式： <code>函数组件</code> + <code>Hooks</code></p></li><li><p>全局状态库：<code>redux + redux-thunk</code></p></li><li><p>组件库：<code>antd-mobile</code></p></li><li><p>样式： <code>CSS Modules </code> + <code>Sass</code></p></li><li><p>路由组件库：<code>react-router-dom</code></p></li><li><p>工具库：lodash</p></li><li><p>websocket 即时通讯</p></li><li><p>第三方组件（<code>formik</code>等）</p></li></ul>',13),c=[r];function d(p,n,s,h,k,_){return t(),o("div",null,c)}const g=e(l,[["render",d]]);export{m as __pageData,g as default};