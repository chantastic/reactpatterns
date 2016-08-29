---
layout: post
title:  "Array as children"
date:   2016-08-17 17:27:00
---

Providing an array as `children` is a very common. It's how lists are drawn in React.

We use `map()` to create an array of React Elements for every value in the array.

{% highlight ts %}
<ul>
  {["first", "second"].map((item) => (
    <li>{item}</li>
  ))}
</ul>
{% endhighlight %}

That's equivalent to providing a literal `array`.

{% highlight ts %}
<ul>
  {[
    <li>first</li>,
    <li>second</li>,
  ]}
</ul>
{% endhighlight %}

This pattern can be combined with destructuring, JSX Spread Attributes, and other components, for some serious terseness.

{% highlight ts %}
<ul>
  {arrayOfMessageObjects.map(({ id, ...message }) =>
    <Message key={id} {...message} />
  )}
</ul>
{% endhighlight %}