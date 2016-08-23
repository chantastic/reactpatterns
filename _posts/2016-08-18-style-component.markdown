---
layout: post
title:  "Style component"
date:   2016-08-18 10:03:00
---

This is the pattern of partially applied components, applied specifically to style.

Say we have a button. It uses classes to be styled as a "primary" button.

{% highlight ts %}
<button type="button" className="btn btn-primary">
{% endhighlight %}

We can construct this using components single-purpose components.

{% highlight ts %}
const PrimaryBtn = props =>
  <Btn {...props} primary />

const Btn = ({ classNmae, primary, ...props }) =>
  <Button
    className={classnames(
      "btn",
      primary && "btn-primary",
      className
    )}
    {...props}
  />

const Button = props =>
  <button type="button" {...props} />
{% endhighlight %}

Now these are all equivalent.
{% highlight ts %}
<PrimaryBtn />
<Btn primary />
<Btn className="btn-primary" />
<Button className="btn btn-primary" />
<button type="button" className="btn btn-primary" />
{% endhighlight %}

The benefit of style componenst this way is that we isolate ourselves from the underlying style implementation. Now we have one place where CSS classes are applied in our React application. This is a huge maintainability win.