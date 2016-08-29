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

Use this to forward `props` to underlying components.

{% highlight ts %}
const FancyDiv = props =>
  <div className="fancy" {...props} />
{% endhighlight %}

Now, I can expect `FancyDiv` to add the attributes it's concerned with as well as those it's not.

{% highlight ts %}
<FancyDiv data-id="my-fancy-div">So Fancy</FancyDiv>

// output: <div className="fancy" data-id="my-fancy-div">So Fancy</div>
{% endhighlight %}

Keep in mind that order matters. If `props.className` is defined, it'll clobber the `className` defined by `FancyDiv`

{% highlight ts %}
<FancyDiv className="my-fancy-div" />

// output: <div className="my-fancy-div"></div>
{% endhighlight %}

We can make `FancyDiv`s className always "win" by placing it after the spread props `({...props})`.

{% highlight ts %}
// my `className` clobbers your `className`
const FancyDiv = props =>
  <div {...props} className="fancy" />
{% endhighlight %}

You should handle these types of props gracefully. In this case, I'll merge the author's `props.className` with the `className` needed to style my component.

{% highlight ts %}
const FancyDiv = ({ className, ...props }) =>
  <div
    className={["fancy", className].join(' ')}
    {...props}
  />
{% endhighlight %}
