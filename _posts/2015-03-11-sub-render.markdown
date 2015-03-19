---
layout: post
title:  "Sub-render"
date:   2015-03-11 00:00:00
---
Additional render function **SHOULD** be used when readability is a concern.

{% highlight ts %}
render() {
  return <ul>{this.props.comments.map(renderItem)</ul>;
}

renderItem({id: key, comment, author}) {
  return (
    <li key={key}>
      "{comment}", {author}
    </li>
  );
}
{% endhighlight %}
