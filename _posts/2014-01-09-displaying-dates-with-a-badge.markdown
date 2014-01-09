---
layout:     post
title:      "Displaying dates with a badge."
date:       2014-01-09 13:55:43
categories: code
---

One of my recent client projects needed a cool, stylized calendar badge for displaying dates. This was going to be used all over the app, so I decided to helperize it. It came out pretty damn nice, so here's how they look.

Here's the calendar_badge with a ruby date object:

![calendar_badge with date object](http://f.cl.ly/items/0v2z3I2U22290u1S2x0j/Screen%20Shot%202014-01-09%20at%202.12.41%20PM.png)

... and without a ruby date object:

![calendar_badge with date object](http://f.cl.ly/items/0J1b1j0t3d2u2y3b2z1q/Screen%20Shot%202014-01-09%20at%202.13.03%20PM.png)

### application_helper.rb

If we have a date object, format the date and emit a span with the month as a class. Title should be the full date, so hovering shows the date with year. It bugs the crap out of me when people forget to do this... or worse yet, don't include a date on blog posts. I really hate that!

{% highlight ruby %}
{% include example_calendar_badge.rb %}
{% endhighlight %}

### calendar_badge.scss

We use icon fonts for each month. I definitely could have done this with just CSS, but retaining the designer's font (which was one-off for these badges) was important. Anytime you're adding a @font-face for some silly one-off thing you should think about how you could save an HTTP request and some bandwidth by accomplishing it with your existing resources — sprites, iconfonts, etc.

{% highlight scss %}
{% include example_calendar_badge.scss %}
{% endhighlight %}

### current_date.haml

It's as simple as just calling the helper with a date object.

When we want a nil date to be displayed we call it with a dash instead of a date object.

{% highlight haml %}
{% include example_calendar_badge.haml %}
{% endhighlight %}
