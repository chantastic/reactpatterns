---
layout: post
title:  "Proxy component"
date:   2016-08-18 10:03:00
---

*(I'm not sure if this name makes sense)*

Buttons are everywhere in web apps. And every one of them must have the `type` attribute set to "button".

{% highlight ts %}
<button type="button">
{% endhighlight %}

Writing this attribute hundreds of times is error prone. We can write a higher level component to proxy `props` to a lower-level `button` component.

{% highlight ts %}
const Button = props =>
  <button type="button" {...props}>
{% endhighlight %}

We can use `Button` in place of `button` and ensure that the `type` attribute is consistently applied everywhere.

{% highlight ts %}
<Button />
// <button type="button"><button>

<Button className="CTA">Send Money</Button>
// <button type="button" class="CTA">Send Money</button>
{% endhighlight %}