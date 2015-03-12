---
layout: post
title:  "Formatting Props"
date:   2015-02-27 00:00:00
---
Props **SHOULD** be put on new lines when 2 or more.

**single prop**

{% highlight html %}
// bad

<Person
 firstName="Michael" />

// good

<Person firstName="Michael" />
{% endhighlight %}

**2+ props**
{% highlight html %}
// bad

<Person firstName="Michael" lastName="Chan" favoriteFood="Drunken Noodles" /> 

// good

<Person
 firstName="Michael"
 lastName="Chan"
 favoriteFood="Drunken Noodles" />
{% endhighlight %}
