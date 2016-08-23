---
layout: post
title:  "Higher-order component"
date:   2016-08-23 08:52:00
---

A higher-order is a function takes and/or returns a function as an argument. It's not more complicated than that. So, what's a higher-order component? You guessed it, it's going to take and/or return a component.

If you're already using Container components, these are just generic containers, wrapped up in a function.

Let's start with our stateless component.

{% highlight ts %}
const MyComponent = ({ data }) => {
  if (!data) { return <div>Waiting...</div> }

  return <div>{data}</div>
}
{% endhighlight %}

If it has data, it's gonna render. Otherwise it'll say that it's "waiting." Now for the the higher-order bit.

{% highlight ts %}
const Enhance = ComposedComponent =>
  class extends React.Component {
    constructor() {
      super()
      this.state = { data: null }
    }

    componentDidMount() {
      this.setState({ data: 'Hello' })
    }

    render() {
      return <ComposedComponent {...this.props} data={this.state.data} />
    }
  }
{% endhighlight %}

This is just a function that returns component that renders the component we wrap with it.

There's just one thing left to do. Wrap our component.

{% highlight ts %}
const EnhancedMyComponent = Enhance(MyComponent)
{% endhighlight %}