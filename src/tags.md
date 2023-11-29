---
title: 'Tag Archive'
layout: 'layouts/feed.njk'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'rss'] # Filters out collections we don't want
permalink: '/tag/{{ tag | slug }}/'
excludeFromSitemap: true
---