---
title: 'Why We Built Our Website Using Eleventy'
date: '2023-11-25T15:30:00'
author: 'Aaron Yoder'
tags: ['Meta']
---

I am not a web developer. When I started out on this journey to build a website, I had no idea how to use HTML and CSS, and I had minimal experience using JavaScript. I had looked at some web frameworks before, but none gave me as much control as I wanted, or were too large and confusing, and had too many things I didn't need. It took me a while, but I finally settled on [Eleventy](https://www.11ty.dev/). Let's take a look at the requirements that led me there.

# Requirements

### Hard Requirements

* **Front-end only**. I do not need a content management system or a complex backend, and I do not want to store user information. I also do not want to be running lots of JavaScript on the browser, and I want fast page load times.
* **Works on all devices**. I want the website to look good on mobile and desktop, regardless of form factor, without having to mess around with a heavy framework or a bunch of different layouts.
* **Easy to use with git**. Being able to deploy directly from a git repository would be ideal.
* **Easy to set up**. I want to get started without being required to understand how a web server works, or how to set one up.
* **Flexible theming**. I want to be able to easily jump into designing the theme for the website, or editing an existing theme.
* **Zero cost**. I do not want to pay recurring fees (beyond the cost for the domain) if I do not have to, and I do not want to purchase templates or themes.
* **No 3rd-party lock-in**. I do not want to be locked in to a proprietary solution. Free and open source solutions are ideal.

### Soft Requirements

* It should work with [Cloudflare Pages](https://pages.cloudflare.com/).
* No JavaScript, Python, or PHP frameworks. I am not against using JavaScript, but I do not want to spend time learning how to use complex frameworks if I do not need the benefits they provide.
* It would be nice if I could use a language already very familiar to me, such as Kotlin or Java.
* I would be okay with a visual editor as long as it still gave me full control over how my website looked without requiring large levels of abstraction away from the source.
* I want to be able to write blog posts using markdown, with optional HTML, much like the GitHub markdown editor.

As you can see, my requirements quickly threw out solutions such as WordPress, SquareSpace, Shopify, Wix, and most other solutions with built-in visual editors. It also threw out JavaScript frameworks such as React, Vue, and Svelte. Let's take a look at the solutions I did end up attempting to use before finally settling on Eleventy.

# What We Tried

### Google Sites

Google Sites was the first thing I looked at. I had used it years prior for a very basic website, and while I wasn't going to be happy with that result this time, I thought that it might give me more control now.

Unfortunately, Google Sites is not viable for anything but the most basic of websites. Even then, I would tell you to opt for writing pure HTML yourself over using Google Sites. The new visual editor is not nice to work with, and it does not give you sufficient control in a usable way. You can put in your own custom elements that use HTML, CSS, and Javascript, which means you can technically build any website you like within Google Sites. This is a very brute-force solution that, if you're using it, means you should probably just be building the website yourself without Google Sites.

Ultimately, we did not go with Google Sites, and we struggle to see a use-case for it outside of school projects.

### Jekyll

I had attempted using Jekyll with GitHub Pages, but it really just did not jive with me. I felt stuck in the theme system, and could not find tutorials for it that I liked. It might be just fine if you stick with it for long enough, but it wasn't something that I felt comfortable with, and I didn't like messing around with YAML files.

### Django

I will admit that I am not a fan of Python, but I had heard very good things about [Django](https://www.djangoproject.com/) and decided to give it a shot. I found it too complex and hard to use for what I wanted to do. I'm sure if you love Python, you'll love this framework. For my needs, it just wasn't right.

### Jetbrains Compose for Web

I had already been using [Compose Multiplatform](https://github.com/JetBrains/compose-multiplatform) to build desktop applications and absolutely loved it. I had been interested in Compose for Web for a while and took a dive in. Compose for Web is still in the very early stages of development. It appears that they rewrote most of it since the last time I looked at it, and the rewrite is nowhere near complete or production-ready, even for a small website. There is also next to no documentation for it, and setup seems to require more effort than I would like.

Unfortunately, all of these problems meant that I would not be using Compose for Web, though I may revisit that in the future.

### Drupal

After [GamersNexus](https://gamersnexus.net/gn-extras/welcome-new-gamersnexus-website-v50-message) put out their video about their new website, I decided to look into [Drupal](https://www.drupal.org/) to see if it would fit my requirements. While Drupal was fairly quick and easy to set up, I felt constricted by the difficulty of deploying a theme. I found lots of themes on the Drupal website, but I could not figure out how to edit themes that did not come with pre-configured options in the visual editor. In addition to that, most themes did not support light and dark modes, and the good themes usually cost money.

I came to the conclusion that a CMS is not what I needed, and that Drupal was far too heavy of a solution for me.

# The Solution: Eleventy

I came across Eleventy while trying to figure out how to deploy my Drupal website as a static website. I found [this post](https://chromatichq.com/insights/why-we-switched-to-eleventy-and-netlify/) and became keen to check it out. I created a brand new Eleventy project from scratch and followed [this nice tutorial](https://learneleventyfromscratch.com/) in order to get familiar with it.

I quickly realized that Eleventy is exactly what I had been looking for. It is set up in a way that makes a lot of sense to me as a desktop, mobile, and backend developer. It allows you to use templates, which let you re-use HTML code, and it lets you throw in JavaScript when you need it. Best of all, it builds a fully static website that can be deployed anywhere!

Eleventy's structure is simple enough that just about anyone can get started very quickly. You set up your `.eleventy.js` file with most of your configuration, and then you can do just about whatever you want from there, starting with basic HTML, CSS, and Javascript files. To power up how you use Eleventy, you can use a templating framework like [Nunjucks](https://mozilla.github.io/nunjucks/) to create templates for reusing HTML code and other data. You create a `base.html` layout that other layouts inherit, possibly set up some basic data in `.json` files that can be pulled into your templates at build time, and then you can expand from there and create page layouts as-needed, and write up your page content using Markdown. You can then use something like [Sass](https://sass-lang.com/) to help you write your CSS. Alternatively, you can just not do all of that, and do things however you like best!

Eleventy helped me quickly pick up and learn HTML and CSS in an intuitive way, which is more than I can say for other frameworks I checked out. You don't need to use Nunjucks and Sass if you do not want to; you could just use basic HTML, CSS, and Javascript. However, the option to use them is there, and they are very powerful ways to get your site up quickly and simply. You can mix and match as you need and structure your project in a way that makes sense to you; you're not forced to do things 'the Eleventy way' because there really is no 'Eleventy' way.

Once everything is set up and ready to build, you can build your website locally and upload it to your favorite hosting service, or host it yourself. In our case, we point Cloudflare Pages to the Eleventy project GitHub repository, set the build command, and then it automatically builds and deploys the website every time we update the GitHub repository.

There are alternatives you can also look into if you want, such as [Hugo](https://gohugo.io/) and [Angular](https://angular.io/). Eleventy is just the first one I found, and I found it very intuitive and easy to use.

# In Summary: What We Use

To summarize, this is everything we use to build our website.

* Visual Studio Code (or your favorite editor of choice)
* Eleventy with Nunjucks and Sass
* Cloudflare Pages for hosting
* Cloudflare Registrar for our domain

Nice and simple, and flexible enough to give us room to grow. The only cost associated with our stack is the wholesale domain cost, which is $10.11/yr (USD) for our domain. That's it!

Thanks for reading!