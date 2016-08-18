---
layout: post
title:  "Function as children"
date:   2016-08-17 17:27:00
---

This is a powerful technique used by libraries like ReactMotion. When applied, rendering logic can be kept in the owner component, instead of being delegated.

Consider a `Width` component that measures the viewport.

{% highlight ts %}
<Width>
  {width => <div>window is {width}</div>}
</Width>
{% endhighlight %}

Now we can use that `width` value to make rendering decisions.

{% highlight ts %}
<Width>
  {width =>
    width > 600
      ? <div>min-width requirement met!</div>
      : null
  }
</Width>
{% endhighlight %}

Now, the width component obviously needs to handle rending of `children` differently. In a very static way, here's what that looks like.

{% highlight ts %}
class Width extends React.Component {
  /* BYOState to make this dynamic */

  render() {
    return this.props.children("700")
  }
}
{% endhighlight %}

Now, we're not forced to write the implementation every time. We can use components to encapsulate the logic above for simple reuse.

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

This is a very powerful alternative Higher Order components. Ultimately, it's a matter of preference.