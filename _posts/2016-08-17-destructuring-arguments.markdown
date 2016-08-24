---
layout: post
title:  "Destructuring Arguments"
date:   2016-08-17 14:48:00
---

Destructuring is an ES2015 feature. It pairs nicely with `props` in Stateless Funcions.

These examples are equivalent.
{% highlight ts %}
const Greeting = props => <div>Hi {props.name}!</div>

const Greeting = ({ name }) => <div>Hi {name}!</div>
{% endhighlight %}

The spread operator allows you to collect all the remaining properties in a new object.

{% highlight ts %}
const Greeting = ({ name, ...props }) =>
  <div>Hi {name}!</div>
{% endhighlight %}

We can use JSX Spread Attributes to proxy these to the rendered component.

{% highlight ts %}
const Greeting = ({ name, ...props }) =>
  <div {...props}>Hi {name}!</div>
{% endhighlight %}

If your component is concerned with non-DOM `props`. It's important to "clean" `props` before passing it along. By destructuring `props`, we're making a new object **without** our API `props`.