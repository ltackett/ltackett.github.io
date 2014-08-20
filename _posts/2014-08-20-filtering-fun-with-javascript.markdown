---
layout:     post
title:      "Filtering Fun with JavaScript."
date:       2014-08-20 14:21:42
categories: code
---

Ever been in a situation where you have already gathered your results from the server, but you need to do some arbitrary text searching on them? Here's a handy way to do it.

Here it is in action:

{% include example_javascript_filtering.html %}

<br />
<br />
<br />

... and here's the code:

### contacts.haml

Basic iteration through all the elements.

{% highlight haml %}
{% include example_javascript_filtering.haml %}
{% endhighlight %}

### contacts.scss

Simple styling for the cards.

{% highlight scss %}
{% include example_javascript_filtering.scss %}
{% endhighlight %}

### text_search.coffee

When I was wiring it up, I chose to use data attr bindings instead of class names. Decoupling your event bindings from your markup classes is a good idea in almost every case.

{% highlight coffee %}
{% include example_javascript_filtering.coffee %}
{% endhighlight %}