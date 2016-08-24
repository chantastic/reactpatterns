---
layout: post
title:  "Function as children"
date:   2016-08-17 17:27:00
---

Using a function as `children` isn't inherantly useful.

{% highlight ts %}
<div>{() => { return "hello world!"}()}</div>
{% endhighlight %}

However, it can be used in component authoring for some serious power. This technique is often referred to as `render callbacks` and powers libraries like [ReactMotion](https://github.com/chenglou/react-motion).

This is a powerful technique used by libraries like ReactMotion. When applied, rendering logic can be kept in the owner component, instead of being delegated.

See [Render callbacks](#Render callback), for more details.