---
layout: post
title:  "Higher-order Components"
date:   2015-11-14 00:00:00
---
Higher-order components **SHOULD** be used to extend component functionality.

[Gist](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775) posted by
[Sebastion Markbåge](https://twitter.com/sebmarkbage).

### Enhance.js
{% highlight js %}
import { Component } from "React";
 
export var Enhance = ComposedComponent => class extends Component {
  constructor() {
    this.state = { data: null };
  }
  componentDidMount() {
    this.setState({ data: 'Hello' });
  }
  render() {
    return <ComposedComponent {...this.props} data={this.state.data} />;
  }
};
{% endhighlight %}

### HigherOrderComponent.js
{% highlight js %}
import { Enhance } from "./Enhance";
 
class MyComponent {
  render() {
    if (!this.data) return <div>Waiting...</div>;
    return <div>{this.data}</div>;
  }
}
 
export default Enhance(MyComponent);
{% endhighlight %}
