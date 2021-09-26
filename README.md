>this plugin is under developing, DO NOT USE IT except you have ability to test it. 

>Possible it will destroy your blog files please backup your file before using.

# hexo-reference-plus
A hexo plugin to support reference and footnotes marked  by markdown in your hexo blog

Inspried by [hexo-reference](https://github.com/kchen0x/hexo-reference).

In past the days, I always wrote posts in hexo quote some references by the markdown links grammar. But it's not an elegant way to do that: you need to manage the serial numbers and links to this or that, or any other things else.

Maybe are there some plugins which can help me optimize this process? In fact, I found hexo-reference above, but it's not all designed for me exactly. Also, there is still a serial numbers management problem. so I develop this plugin.

Things should be easy, because I just wanna write some tiny blog posts rather than an essay. So there is no need to use some references management promgrams or things like that.

So all you need to do is Three steps:
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
And what the plugin actually does is also easy:
transfrom your references area code into html with serial number like:
```
[01]  Max C. Foo.  A way to write an article.[J] Journal of Kelaideng University Samwin School. 2021.3 300-321.
```
and then your sentences with reference will be like:
```
So here is the way what Max C. Foo(2021)[1] do.

```

