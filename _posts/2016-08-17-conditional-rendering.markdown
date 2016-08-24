---
layout: post
title:  "Conditional Rendering"
date:   2016-08-17 15:16:00
---

You can't use regular if/else conditions inside a `render` function. [The conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) is your friend.

`if`

{% highlight ts %}
{condition && <span>Rendered when `truthy`</span> }
{% endhighlight %}

`unless`

{% highlight ts %}
{condition || <span>Rendered when `falsey`</span> }
{% endhighlight %}

`if-else` (tidy one-liners)

{% highlight ts %}
{condition
  ? <span>Rendered when `truthy`</span>
  : <span>Rendered when `falsey`</span>
}
{% endhighlight %}

`if-else` (big blocks)

{% highlight ts %}
{condition ? (
  <span>
    Rendered when `truthy`
  </span>
) : (
  <span>
    Rendered when `falsey`
  </span>
)}

{% endhighlight %}