---
layout: post
title:  "Formatting Props"
date:   2015-02-27 00:00:00
---
Wrap props on newlines for exactly 2 or more.

{% highlight html %}
// ok
<Person firstName="Michael" />

// bad
<Person firstName="Michael" lastName="Chan" favoriteFood="Drunken Noodles" /> 

// good
<Person
 firstName="Michael"
 lastName="Chan"
 favoriteFood="Drunken Noodles" />
{% endhighlight %}
