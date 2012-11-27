---
layout: post
title: On classes and IDs
---

I'm a big fan of [Nicole Sullivan][] and [Object Oriented CSS][OOCSS]. One of the practices I embraced, also thanks to [CSS Lint][], is not to use IDs in CSS selectors. The main benefits from this practice:

* code maintainability,
* performance (better page load times),
* avoiding specificity wars.

Oli Studholme illustrates it nicely in his article [Don’t use IDs in CSS selectors?][].

I also really enjoyed reading [Jeffrey Zeldman][]'s view on this, [In defense of descendant selectors and ID elements][], and I agree:

> There is nothing wrong with id when it is used appropriately (semantically, structurally, sparingly). There is plenty wrong with the notion that class is always preferable to descendant selectors and semantic, structural ids.

The main point I see in his article:

> Please understand: I’m not disparaging my friend Nicole Sullivan’s Object Oriented CSS as an approach to otherwise unmanageable websites. No more would I disparage a steam shovel for cleaning up a disaster site. I just wouldn’t use it to clean my room.

Nevertheless, not using IDs, but only classes in CSS selectors, has done a lot for my productivity, solely from the perspective of code maintainability, so I'll continue "keeping my room in order" with this practice.


[OOCSS]: https://github.com/stubbornella/oocss/wiki
[Nicole Sullivan]: http://www.stubbornella.org/content/
[CSS Lint]: http://csslint.net
[Don’t use IDs in CSS selectors?]: http://oli.jp/2011/ids/
[In defense of descendant selectors and ID elements]: http://www.zeldman.com/2012/11/21/in-defense-of-descendant-selectors-and-id-elements/
[Jeffrey Zeldman]: http://www.zeldman.com/about/
