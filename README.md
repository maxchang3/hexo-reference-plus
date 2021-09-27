# hexo-reference-plus
[![](https://z3.ax1x.com/2021/09/27/4gfIiD.gif)](https://imgtu.com/i/4gfIiD)
A hexo plugin to support reference and footnotes marked  by markdown in your hexo blog
- auto serial number [x]
- tooltip with tippy.js [x]
- easy to use  grammar [x]
- configuration in front-matter for minimize [x]


Inspried by [hexo-reference](https://github.com/kchen0x/hexo-reference).

# Install
```
yarn add hexo-reference-plus
```
or 
```
npm install hexo-reference-plus
```

# Usage
All you need to do is Three steps:
First, set `refplus: true` in your hexo markdown file's front-matter, like
```markdown
---
title: hexo-reference-plus
date: 2021-09-24 15:49:08
refplus: true
---
```

Second, you mark the references in the end, and assign each reference an alias(generally recommend do not contain serial number) like:
```
{% references %}
[mcf-2021]  Max C. Foo.  A way to write an article.[J] Journal of Kelaideng University Samwin School. 2021.3 300-321.
{% endreferences %}
```
Third mark the  alias in the area you want, like:
```
So here is the way what Max C. Foo(2021){% ref mcf01 %} do.
```
that's it.

