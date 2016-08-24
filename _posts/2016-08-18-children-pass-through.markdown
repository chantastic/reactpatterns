---
layout: post
title:  "Children pass-through"
date:   2016-08-18 10:03:00
---

There are times you might create a component designed to apply `context` and render it's `children`.

{% highlight ts %}
class SomeContextProvider extends React.Component {
  getChildContext() {
    return {some: "context"}
  }

  render() {
    // how best do we return `children`?
  }
}
{% endhighlight %}

You're faced with a decision. Wrap `children` in an extranious `<div />` or return `children` directly. The first options gives you extra markup (which can break some stylesheets). The second will result in unhelpful errors.

{% highlight ts %}
// option 1: extra div
return <div>{children}</div>

// option 2: unhelpful errors
return children
{% endhighlight %}

It's best to treat `children` as an opaque data type. React provides `React.Children` for dealing with `children` approprately and opting back into helpful errors.

{% highlight ts %}
return React.Children.only(this.props.children)
{% endhighlight %}