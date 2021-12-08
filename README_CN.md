# hexo-reference-plus
[English](https://github.com/MaxChang3/hexo-reference-plus) ｜ 简体中文
<details>
<summary>GIF 预览 (3mb)</summary>

![](https://z3.ax1x.com/2021/09/27/4gfIiD.gif)

</details>

使用markdown在你的hexo博客添加引用与脚注。

- [x] 自动编排序号

- [x] 使用 tippy.js 实现停留提示

- [x] 简单易用的语法

- [x] 在markdown中配置开关以减少不使用的页面体积


灵感来自 [hexo-reference](https://github.com/kchen0x/hexo-reference)。

## 安装
```
yarn add hexo-reference-plus
```
或
```
npm install hexo-reference-plus
```

## 使用
一共只需要三步:

首先，在你的markdown文件的`front-matter`区域设置`refplus:true`
```markdown
---
title: hexo-reference-plus
date: 2021-09-24 15:49:08
refplus: true
---
```


然后，在文章末尾标注references区域，给每一个引用分配一个别名（推荐不要包括序号）
```
{% references %}
[mcf-2021]  Max C. Foo.  A way to write an article.[J] Journal of Kelaideng University Samwin School. 2021.3 300-321.
{% endreferences %}
```
最后，在你需要引用的位置标记上面你设置的别名
```
So here is the way what Max C. Foo(2021){% ref mcf01 %} do.
```
完成。

## 配置

在你的 `_config.yml` 下添加以下配置项以控制 tippy.js 的开关。
```yaml
# hexo-reference-plus
refplus:
  tippy: true
```