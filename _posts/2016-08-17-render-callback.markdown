---
layout: post
title:  "Render callback"
date:   2016-08-17 17:27:00
---

This a component that uses a Render callback. It does so a way that's not useful but it's good for illustration.

{% highlight ts %}
const Width = ({ children }) => children(500)
{% endhighlight %}

The component calls `children` as a function, with some number of arguments. Here, it's the number `500`.

To use this component, we give it a [function as `children`](#Function as children).

{% highlight ts %}
<Width>
  {width => <div>window is {width}</div>}
</Width>
{% endhighlight %}

We get output that looks like this.

{% highlight ts %}
<div>window is 500</div>
{% endhighlight %}

We can use this `width` value to make rendering decisions.

{% highlight ts %}
<Width>
  {width =>
    width > 600
      ? <div>min-width requirement met!</div>
      : null
  }
</Width>
{% endhighlight %}

If we plan to use this condition a lot, we can define another components to encapsulate the reused logic.

{% highlight ts %}
const MinWidth = ({ width: minWidth, children }) =>
  <Width>
    {width =>
      width > minWidth
        ? children
        : null
    }
  </Width>
{% endhighlight %}


Obviously a static `Width` component isn't valuable but one that watches the browser window is. Here's a sample implementation.

{% highlight ts %}
class WindowWidth extends React.Component {
  constructor() {
    super()
    this.state = { width: 0 }
  }

  componentDidMount() {
    this.setState(
      {width: window.innerWidth},
      window.addEventListener(
        "resize",
        ({ target }) =>
          this.setState({width: target.innerWidth})
      )
    )
  }

  render() {
    return this.props.children(this.state.width)
  }
}
{% endhighlight %}

Alternatively, many developers favor [Higher Order Components](#Higher-order component) for this type of functionality.