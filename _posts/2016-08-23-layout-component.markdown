---
layout: post
title:  "Layout component"
date:   2016-08-23 08:19:00
---

Layout components referes to a component that renders some DOM and doesn't need may not need to be updated. I'll focus here on the aggressive approach to layout components, which is to never re-render them.

Say you have a `HorizontalSplit` component that renders two components, one left, one right. It might look like this, in practice.

{% highlight ts %}
<HorizontalSplit
  leftSide={<SomeSmartComponent />}
  rightSide={<AnotherSmartComponent />}
/>
{% endhighlight %}

While `HorizontalSplit` will be the `parent` of the two children components, it will never be the `owner`. This means we can aggressively optimize our `HorizontalSplit` component without affecting the children.

{% highlight ts %}
class HorizantalSplit extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    <FlexContainer>
      <div>{this.props.leftSide}</div>
      <div>{this.props.rightSide}</div>
    </FlexContainer>
  }
{% endhighlight %}