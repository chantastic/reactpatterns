---
layout: post
title:  "Destructuring Arguments"
date:   2016-08-17 14:48:00
---

Destructuring is an ES2015 feature. It pairs nicely with `props` in `stateless function` component definitions.

{% highlight ts %}
const Greeting = ({ name }) =>
  <div>Hi {name}!</div>
{% endhighlight %}


`...` allows you to collect any object properties, that haven't been destructured, into a new local object.

{% highlight ts %}
const Greeting = ({ name, ...props }) =>
  <div>Hi {name}!</div>
{% endhighlight %}

When combined with JSX Spread Attributes, you can pass remaining props to the rendered component. This makes for very durable components that can be used in unforseen ways

{% highlight ts %}
const Greeting = ({ name, ...props }) =>
  <div {...props}>Hi {name}!</div>
{% endhighlight %}