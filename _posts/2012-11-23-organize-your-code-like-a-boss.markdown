---
layout:     post
title:      "Organize your SCSS (like a boss)"
date:       2012-11-23 17:48:39
categories: articles code
---

I'll admit it... I didn't like the [SCSS](http://sass-lang.com/docs/yardoc/file.SCSS_FOR_SASS_USERS.html) syntax when it was first added to [Sass](http://sass-lang.com/). I, like many other front-end devs using Sass at the time, thought it was super ugly and pushed too hard against one the main reasons I started using Sass — to make my stylesheets pretty.

Legibility is *really* important to me. I was of the opinion that SCSS would be as illegible as vanilla CSS.

A year or so ago, I was offered a job at [Turing](http://turing.com/) to come work with their front-end team. They intentionally do not use the Sass syntax, so my hand was forced to either learn SCSS or not accept the job. I decided that I shouldn't be so vehemently against a syntax without actually trying it out, so I took the job.

I am still with Turing... and SCSS rocks my pants. Here's what I've learned:

1. SCSS doesn't have to be ugly.
1. A lack of brackets actually makes some kinds of rule sets uglier than their bracketed counterparts.
1. Aligning CSS values makes a HUGE difference in code legibility.
1. Conditionally-overridden rule sets should be grouped together.
1. Sets of rules that are related can be grouped together for even more legibility.

Legible SCSS looks like this:

{% highlight scss %}
{% include example_scss_formatting.scss %}
{% endhighlight %}

Specifically, these are my strategies for writing sexy-looking SCSS... or SexyCSS........

\>_>

<_<

... I’ll see myself out.

Property ordering is critical, and really has nothing to do with SCSS itself. Well-ordered properties can also apply to Sass, Less, Stylus, etc.

Property ordering from top to bottom:

1. @extend
1. @include
1. properties with string values
1. properties with integer values
1. child/nested selectors

@extend rules first, because they often come from styleguides. If you include these at the end of the rule set, you can potentially override using the default values, instead of the override values.

Similarly, @include mixins should also be at the top, for the same reason of accidental overriding using the wrong values.

Separating properties values based on whether they are string or integer values… why do this? Because it’s prettier to look at, to my eyes. Another thing I’ve recently started doing is grouping rule sets by similarities. For example, in the code above, my font settings and position/box settings in .close-button are separate from the rest of the rule set…. why do this? Again, because it looks prettier to me.

Aligning values up in columns is another huge legibility boon. For this, I use a Sublime Text plugin called [vAlign](https://github.com/jlong64/sublime_valign)... because there is absolute no way I want to do that by hand. If you are aligning your property values by hand, uh, stop doing that.

Ampersands are great. Aren’t they? I love me an ampersand. They are really useful in Sass/SCSS because they reference the entire selector chain up to that point which lets you do some pretty nifty things. Most people only ever use them to append pseudo classes on elements. However, there are some other amazing things you can do with them:

Use ampersands by themselves to group together rules that will be conditionally-overridden. For example, when you want things to behave differently when you hover.
Use ampersands at the end of the selector, essentially re-scoping a rule set. For example, maybe you want to group together Modernizr fallback classes.
Finally, one last important thing I try to avoid at all cost: DON’T NEST TOO DEEPLY. SCSS is much better at slapping you around for nesting too deeply. My general rule of thumb on nesting: If you’re nesting more than five levels, ask yourself if you need all of those levels. Sometimes the answer is yes, most of the time it’s no, and you can cut down some useless nesting.

So, there you have it. That’s how to organize your SCSS like a mo’ fraggin’ BAUS.