---
layout: post
title:  "Children pass-through"
date:   2016-08-18 10:03:00
---

When components are used to apply context or make decisions about rendering, they shouldn't render unnecessary DOM nodes. Using `React.Children.only` can ensure that rendering `children` without a single root element surfaces a reasonable error.

{% highlight ts %}
class SomeContextProvider extends React.Component {
  render() {
    return React.Children.only(this.props.children)
  }
}

{% endhighlight %}

I use this quite a bit with the context privoder and funcion as children patterns.