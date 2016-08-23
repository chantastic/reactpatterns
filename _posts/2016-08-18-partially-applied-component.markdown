---
layout: post
title:  "Partially applied component"
date:   2016-08-18 10:03:00
---

*I'm bastardizing the meaning of [partial application](https://en.wikipedia.org/wiki/Partial_application). I'm OK with it. If you aren't tell me what this should be called.*

Buttons are everywhere in webapps. And every one of them must have the `type` attribute set to "button".

{% highlight ts %}
<button type="button">
{% endhighlight %}

The concept behind partially applied applicition is that you could create components with some attributes applied, without affecting application of the others. JSX spread attributes helps us out here.

{% highlight ts %}
const Button = props =>
  <button type="button" {...props}>
{% endhighlight %}

Now we can use `Button` in place of `button` and ensure that the attribute is applied properly, regardless of what our future needs demand.

{% highlight ts %}
<Button />
// <button type="button"><button>

<Button className="CTA">Send Money</Button>
// <button type="button" class="CTA">Send Money</button>
{% endhighlight %}