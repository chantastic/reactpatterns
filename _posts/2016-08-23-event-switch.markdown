---
layout: post
title:  "Event switch"
date:   2016-08-23 08:19:00
---

When writing event handlers it's common to adopt the `handle{eventName}` naming convention.

{% highlight ts %}
handleClick(e) { /* do something */ }
{% endhighlight %}

For components that handle several event types, these function names can be repetitive. The names themselves might not provide much value, as they simply proxy to other actions/functions.

{% highlight ts %}
handleClick() { require("./actions/doStuff")(/* action dtes */) }
handleMouseEnter() { this.setState({ hovered: true }) }
handleMouseLeave() { this.setState({ hovered: false }) }
{% endhighlight %}

Consider writing a single event handler for your component and switching on `event.type`.

{% highlight ts %}
handleEvent({type}) {
  switch(type) {
    case "click":
      return require("./actions/doStuff")(/* action dates */)
    case "mouseenter":
      return this.setState({ hovered: true })
    case "mouseenter":
      return this.setState({ hovered: false })
    default:
      return console.warn(`No case for event type "${type}"`)
  }
}
{% endhighlight %}

Alternatively, for simple components, you can call imported actions/functions directly from components, using arrow functions.

{% highlight ts %}
<div onClick={() => someImportedAction({ action: "DO_STUFF" })}
{% endhighlight %}

Don't fret about performance optimizations until you have problems. Seriously don't.