---
layout: post
title:  "JSX Spread Attributes"
date:   2016-08-17 14:26:00
---

Spread Attributes is a feature of JSX. It provides a convenient way to pass each property of an object as JSX attribute.

{% highlight ts %}
const FancyDiv = props =>
  <div className="fancy" {...props} />
{% endhighlight %}

Order matters. In the example above. `className="fancy"` will get clobbered by a `className` definition in `props`. In the example below. `className="fancy"` will clobber any definition in `props`.

{% highlight ts %}
const FancyDiv = props =>
  <div {...props} className="fancy" />
{% endhighlight %}

This can make very durable components. But know that React will log warnings if you you attempt to use any non-DOM elements on a native element.

Read Destructuring Arguments for a good, general solution to this problem.