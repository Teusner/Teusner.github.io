---
layout: page
permalink: /publications/
title: publications
description: Find here my research papers, conference contributions, and journal articles.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="bibliography">Journal Articles</h2>
{% bibliography -f papers -q @article %}

<h2 class="bibliography">Conference Proceedings</h2>
{% bibliography -f papers -q @inproceedings %}

</div>
