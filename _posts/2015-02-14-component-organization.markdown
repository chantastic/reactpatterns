---
layout: post
title:  "Component Organization"
date:   2015-02-14 00:00:00
---
Function definitions **SHOULD** be predictably ordered.

<br />

{% highlight js %}
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.pravateMethod = () => {}
  }

  get getter() {}

  handleEvent() {}

  render() {
    return <div>{this.getter}</div>;
  }
}

Counter.propTypes = {};
Counter.defaultProps = {};
{% endhighlight %}

<br />

How you organize your components is up to the taste of your team.
