---
layout: post
title:  "Style component"
date:   2016-08-18 10:03:00
---

This is a [Proxy component](#Proxy component) applied to the practices of style.

Say we have a button. It uses classes to be styled as a "primary" button.

{% highlight ts %}
<button type="button" className="btn btn-primary">
{% endhighlight %}

We can generate this output using a couple single-purpose components.

{% highlight ts %}
const PrimaryBtn = props =>
  <Btn {...props} primary />

const Btn = ({ className, primary, ...props }) =>
  <button
    type="button"
    className={classnames(
      "btn",
      primary && "btn-primary",
      className
    )}
    {...props}
  />
{% endhighlight %}

It can help to visualize this.

{% highlight ts%}
PrimaryBtn()
  ↳ Btn({primary: true})
    ↳ Button({className: "btn btn-primary"}, type: "button"})
      ↳ '<button type="button" class="btn btn-primary"></button>'
{% endhighlight %}

Using these components, all of these result in the same output.
{% highlight ts %}
<PrimaryBtn />
<Btn primary />
<button type="button" className="btn btn-primary" />
{% endhighlight %}

This can be a huge boon to style maintenance. It isolates all concerns of style to a single component.