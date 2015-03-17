---
layout: post
title:  "Static-View Component"
date:   2015-03-17 00:00:00
---

Static-View Components **MAY** be used to optimize layout components.

Static-View Components **SHOULD** be named with a `Static` prefix.

{% highlight js %}
export default class StaticTwoColumnRow extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    <div class="row"
      <div class="col">
        {this.props.children[0]}
      </div>

      <div class="col">
        {this.props.children[1]}
      </div>
    </div>
  }
}
{% endhighlight %}

{% highlight js %}
<App>
  <StaticTwoColumnRow>
    <div>Thing 1</div>
    <div>Thing 2</div>
  </StaticTwoColumnRow>
</App>
{% endhighlight %}

Static-View have the characteristic of never re-rendering. It's important to
note that, in this case, the nested components are not owned by
`StaticTwoColumnRow` and will re-render as expected.
