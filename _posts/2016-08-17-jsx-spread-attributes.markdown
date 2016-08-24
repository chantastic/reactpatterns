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

There are a few cases this feature really shines. I use it all the time for my [#Stateless function] components. I get to apply `props` my component is concerned with, while keeping the component open other use cases.

Look at this component that applies a className and fowards the remaining props.

{% highlight ts %}
const FancyDiv = props =>
  <div className="fancy" {...props} />
{% endhighlight %}

I can give any DOM properties I want to `FancyDiv` and they'll get forwarded to the underlying div.

{% highlight ts %}
<div data-id="my-fancy-div">So Fancy</div>
{% endhighlight %}

Order matters here. If `props.className` is defined, it'll clobber the `className` definition (in the example above). If we want our component's `className` to win, it has to go after `{...props}`.

{% highlight ts %}
// my `className` clobbers your `className`
const FancyDiv = props =>
  <div {...props} className="fancy" />
{% endhighlight %}

In most cases, you're just gonna have to trust people. Make your component durable by gracefully handling the `props` your component cares about.

{% highlight ts %}
const FancyDiv = ({ className, ...props }) =>
  <div
    className={["fancy", className].join(' ')}
    {...props}
  />
{% endhighlight %}