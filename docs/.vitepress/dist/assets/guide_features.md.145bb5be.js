import{_ as t,c as e,o as a,O as s}from"./chunks/framework.2ede44d5.js";const f=JSON.parse('{"title":"特性","description":"","frontmatter":{},"headers":[],"relativePath":"guide/features.md","filePath":"guide/features.md"}'),l={name:"guide/features.md"},n=s(`<h1 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h1><h2 id="简要介绍" tabindex="-1">简要介绍 <a class="header-anchor" href="#简要介绍" aria-label="Permalink to &quot;简要介绍&quot;">​</a></h2><p>该组件库采用 Vue3 + TS + Vite3 + Less 实现！</p><p>开箱即用！</p><h2 id="三种组件库使用方式" tabindex="-1">三种组件库使用方式 <a class="header-anchor" href="#三种组件库使用方式" aria-label="Permalink to &quot;三种组件库使用方式&quot;">​</a></h2><ul><li>全局引入所有组件</li><li>按需引入部分组件</li><li>git clone <a href="https://github.com/themusecatcher/vue-amazing-ui" target="_blank" rel="noreferrer">vue-amazing-ui</a> 到本地后，从 packages 下单独拷贝单文件组件 (SFC) 到项目内使用</li></ul><h2 id="八个常用工具函数" tabindex="-1">八个常用工具函数 <a class="header-anchor" href="#八个常用工具函数" aria-label="Permalink to &quot;八个常用工具函数&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Function name</th><th style="text-align:left;">Descriptions</th><th style="text-align:left;">Arguments</th></tr></thead><tbody><tr><td style="text-align:left;">dateFormat</td><td style="text-align:left;">简单易用的日期格式化函数！</td><td style="text-align:left;">(timestamp: number|string|Date, format = &#39;YYYY-MM-DD HH:mm:ss&#39;) =&gt; string</td></tr><tr><td style="text-align:left;">requestAnimationFrame</td><td style="text-align:left;">针对不同浏览器进行兼容处理！</td><td style="text-align:left;">使用方式不变</td></tr><tr><td style="text-align:left;">cancelAnimationFrame</td><td style="text-align:left;">针对不同浏览器进行兼容处理！</td><td style="text-align:left;">使用方式不变</td></tr><tr><td style="text-align:left;">rafTimeout</td><td style="text-align:left;">使用 requestAnimationFrame 实现的定时器函数，等效替代 (setTimeout 和 setInterval)！</td><td style="text-align:left;">(func: Function, delay = 0, interval = false) =&gt; object</td></tr><tr><td style="text-align:left;">cancelRaf</td><td style="text-align:left;">用于取消 rafTimeout 函数！</td><td style="text-align:left;">(raf: { id: number }) =&gt; void</td></tr><tr><td style="text-align:left;">throttle</td><td style="text-align:left;">使用 rafTimeout 实现的节流函数！</td><td style="text-align:left;">(fn: Function, delay = 300) =&gt; any</td></tr><tr><td style="text-align:left;">debounce</td><td style="text-align:left;">使用 rafTimeout 实现的防抖函数！</td><td style="text-align:left;">(fn: Function, delay = 300) =&gt; any</td></tr><tr><td style="text-align:left;">add</td><td style="text-align:left;">消除js加减精度问题的加法函数！</td><td style="text-align:left;">(num1: number, num2: number) =&gt; number</td></tr></tbody></table><h2 id="工具函数使用方式" tabindex="-1">工具函数使用方式 <a class="header-anchor" href="#工具函数使用方式" aria-label="Permalink to &quot;工具函数使用方式&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dateFormat</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">requestAnimationFrame</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cancelAnimationFrame</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rafTimeout</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cancelRaf</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">throttle</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">debounce</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">add</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-amazing-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,10),o=[n];function r(p,i,c,d,y,u){return a(),e("div",null,o)}const D=t(l,[["render",r]]);export{f as __pageData,D as default};
