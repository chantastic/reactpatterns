---
layout: post
title:  "Destructuring Arguments"
date:   2016-08-17 14:48:00
---

[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) is an ES2015 feature. It pairs nicely with `props` in Stateless Functions.

These examples are equivalent.
{% highlight ts %}
const Greeting = props => <div>Hi {props.name}!</div>

const Greeting = ({ name }) => <div>Hi {name}!</div>
{% endhighlight %}

The [rest parameter syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) (`...`) allows you to collect all the remaining properties in a new object.

{% highlight ts %}
const Greeting = ({ name, ...props }) =>
  <div>Hi {name}!</div>
{% endhighlight %}

In turn, this object can use [JSX Spread Attributes](#JSX Spread Attributes) to forword `props` to the composed component.

{% highlight ts %}
const Greeting = ({ name, ...props }) =>
  <div {...props}>Hi {name}!</div>
{% endhighlight %}

Avoid forwarding non-DOM `props` to composed components. Destructuring makes this very easy because you can create a new `props` object **without** component-specific `props`.