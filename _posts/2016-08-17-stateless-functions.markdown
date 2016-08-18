---
layout: post
title:  "Stateless Functions"
date:   2016-08-17 13:43:00
---

Stateless functions syntax is the ideal way to define reusable components.

They don't hold `state` or `refs`; they're just functions.

{% highlight ts %}
const Greeting = () => <div>Hi there!</div>
{% endhighlight %}

These functions have access to `props` and `context`.

{% highlight ts %}
{% raw ts %}
const Greeting = props, contex =>
  <div style={{color: context.color}}>Hi {props.name}!</div>
{% endraw %}
{% endhighlight %}

You can create local variables by using a function block.

{% highlight ts %}
const Greeting = props, contex => {
  const style = {
    fontWeight: "bold",
    color: contex.color,
  }

  return <div style={style}>{props.name}</div>
}
{% endhighlight %}

You could do the same thing with functions.

{% highlight ts %}
const getStyle = context => ({
  fontWeight: "bold",
  color: contex.color,
})

const Greeting = props, contex =>
  <div style={getStyle(context)}>{props.name}</div>
{% endhighlight %}

Wrapping the returned function in `()` might make your editor a little happier.

{% highlight ts %}
const Greeting = props, contex => (
  <div style={getStyle(context)}>{props.name}</div>
)
{% endhighlight %}

Stateless functions can have `defaultProps` and `propTypes` and `contextTypes`.

{% highlight ts %}
const Greeting = props, contex => (
  <div style={getStyle(context)}>{props.name}</div>
)
Greeting.propTypes = {
  name: PropTypes.string.isRequired
}
Greeting.defaultProps = {
  name: "Guest"
}
Greeting.contextTypes = {
  color: PropTypes.string
}
{% endhighlight %}