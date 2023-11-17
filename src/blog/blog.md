---
title: 'Blog'
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 25
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

Welcome to the Adelheid Software blog! You can find all of our blog posts here.