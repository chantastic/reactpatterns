---
layout: post
title:  "JSX Spread Attributes"
date:   2016-08-17 14:26:00
---

Spread Attributes is a JSX feature. It's syntactic sugar for passing all of an object's properties as JSX attributes.

These two examples are equivalent.
{% highlight ts %}
// props written as attributes
<main className="main" role="main">{children}</main>

// props "spread" from object
<main {...{className: "main", role: "main", children}} />
{% endhighlight %}

Spread Attributes is handy where you want a component to proxy some `props` and past the rest along.

{% highlight ts %}
const FancyDiv = props =>
  <div className="fancy" {...props} />
{% endhighlight %}

Order matters here. If `props.className` is define, it'll clobber the `className` definition (in the example above). If we want our component's `className` to win, it has to go after `{...props}`.

{% highlight ts %}
// our `className` clobbers your `className`
const FancyDiv = props =>
  <div {...props} className="fancy" />
{% endhighlight %}

In most cases, you're gonna have to trust people. Make your component durable by gracefully handling `props` your component is opinionated about.

{% highlight ts %}
const FancyDiv = ({ className, ...props }) =>
  <div
    className={["fancy", className].join(' ')}
    {...props}
  />
{% endhighlight %}