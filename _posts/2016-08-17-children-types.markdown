---
layout: post
title:  "Children Types"
date:   2016-08-17 17:20:00
---

React accepts a number types as `children`. Here are some examples uses.

By default everything you put inside a JSX tag is a string. Any other type needs to be escaped out of JSX, using curly-braces.

`string`

{% highlight ts %}
<div>
  A String.
</div>
{% endhighlight %}

`array`

{% highlight ts %}
<div>
  {[
    "Hello ",
    <span>World</span>,
    "!",
  ,
  ]}
</div>
{% endhighlight %}

`function`

{% highlight ts %}
<div>
  {() => ["Hello", "World."].join(' ')}
</div>
{% endhighlight %}