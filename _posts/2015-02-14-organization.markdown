---
layout: post
title:  "Organization"
date:   2015-02-14 00:00:00
categories: jekyll update
---
Component organization is very important when working with a team.

The ordering itself is not critically important, as long as you are consistent.

Here's how I like to do it.

ES5

{% highlight js %}
var MyComponent = React.createClass({
  mixins: [],

  propTypes: {},

  getInitialState: function () {},

  getDefaultProps: function () {},

  getAccessor: function () {},

  handleEvent: function () {},

  _privateMethod: function () {},

  render: function () {
    return <div>{this.getAccessor()}</div>;
  }
});
{% endhighlight %}

ES6

{% highlight js %}
export class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.pravateMethod = () => {}
  }

  get accessor(): {}

  handleEvent(): {}

  render: function () {
    return <div>{this.accessor}</div>;
  }
}

Counter.propTypes = {};
Counter.defaultProps = {};
{% endhighlight %}

See [Higher Order
Components](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775) for mixin
in ES6.
