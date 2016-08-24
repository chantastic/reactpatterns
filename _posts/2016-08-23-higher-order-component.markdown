---
layout: post
title:  "Higher-order component"
date:   2016-08-23 08:52:00
---

A [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) is a function takes and/or returns a function. It's not more complicated than that. So, what's a higher-order component?

If you're already using [container components](#Container component), these are just generic containers, wrapped up in a function.

Let's start with our stateless `Greeting` component.

{% highlight ts %}
const Greeting = ({ name }) => {
  if (!data) { return <div>Connecting...</div> }

  return <div>Hi {name}!</div>
}
{% endhighlight %}

If it gets `props.name`, it's gonna render that data. Otherwise it'll say that it's "Connecting...". Now for the the higher-order bit.

{% highlight ts %}
const Connect = ComposedComponent =>
  class extends React.Component {
    constructor() {
      super()
      this.state = { name: "" }
    }

    componentDidMount() {
      // this would fetch or connect to a store
      this.setState({ name: "Michael" })
    }

    render() {
      return <ComposedComponent {...this.props} data={this.state.data} />
    }
  }
{% endhighlight %}

This is just a function that returns component that renders the component we passed as an argument.

Last step, we need to wrap our our `Greeting` component in `Connect`.

{% highlight ts %}
const ConnectedMyComponent = Connect(Greeting)
{% endhighlight %}

This is a powerful pattern for providing fetching and providing data to any number of [stateless function components](#Stateless function).