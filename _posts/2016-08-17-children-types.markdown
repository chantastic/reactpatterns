---
layout: post
title:  "Children Types"
date:   2016-08-17 17:20:00
---

React can render `children` of many types. In most cases it's either an `array` or a `string`.

`string`

{% highlight ts %}
<div>
  Hello World!
</div>
{% endhighlight %}

`array`

{% highlight ts %}
<div>
  {["Hello ", <span>World</span>, "!"]}
</div>
{% endhighlight %}

Functions may be used as children. However, it will required [coordination with the parent component](#Render callback) to be useful.

`function`

{% highlight ts %}
<div>
  {() => { return "hello world!"}()}
</div>
{% endhighlight %}
