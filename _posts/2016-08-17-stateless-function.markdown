---
layout: post
title:  "Stateless function"
date:   2016-08-17 13:43:00
---

[Stateless functions](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) are a brilliant way to define highly reusable components.
They don't hold `state` or `refs`; they're just functions.

{% highlight ts %}
const Greeting = () => <div>Hi there!</div>
{% endhighlight %}

They get passed `props` and `context`.

{% highlight ts %}
{% raw ts %}
const Greeting = (props, contex) =>
  <div style={{color: context.color}}>Hi {props.name}!</div>
{% endraw %}
{% endhighlight %}

They can define local variables when a function block is used.

{% highlight ts %}
const Greeting = (props, contex) => {
  const style = {
    fontWeight: "bold",
    color: contex.color,
  }

  return <div style={style}>{props.name}</div>
}
{% endhighlight %}

But you could get the same affect with other functions.

{% highlight ts %}
const getStyle = context => ({
  fontWeight: "bold",
  color: contex.color,
})

const Greeting = (props, contex) =>
  <div style={getStyle(context)}>{props.name}</div>
{% endhighlight %}

They can have `defaultProps`, `propTypes` and `contextTypes`.

{% highlight ts %}
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