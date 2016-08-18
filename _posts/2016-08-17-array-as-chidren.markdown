---
layout: post
title:  "Array as children"
date:   2016-08-17 17:27:00
---

Providing `children` as an Array is a very common pattern. It's how lists are drawn in React. `map()` is most commonly used.

This creates a new array, with a React Element for every value in the array.

{% highlight ts %}
<ul>
  {["first", "second", "third"].map((item, i) => (
    <li key={i}>{item}</li>
  ))}
</ul>
{% endhighlight %}

The example is equivalent to this.

{% highlight ts %}
<ul>
  {[
    <li key={0}>first</li>,
    <li key={1}>second</li>,
    <li key={2}>third</li>,
  ]}
</ul>
{% endhighlight %}

It can be combined with destructing where the array contains objects.

{% highlight ts %}
<ul>
  {arrayOfMessageObjects.map(({
    id, name, message
  }) => (
    <li key={id}>
      <h1>{name}</h1>
      <div>{message}</div>
    </li>
  ))}
</ul>
{% endhighlight %}

Further combine with components and JSX Spread Attributes for some serious tersesess.

{% highlight ts %}
<ul>
  {arrayOfMessageObjects.map(({ id, message }) =>
    <Message key={id} {...message} />
  )}
</ul>
{% endhighlight %}