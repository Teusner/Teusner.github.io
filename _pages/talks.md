---
layout: page
permalink: /talks/
title: talks
description: Presentations given during seminars or symposiums
nav: true
sitemap: false
---

{% assign sorted = site.data.talks | sort: 'date' | reverse %}

<h2>Incomming talks</h2>
<div class="container">
{% for talk in sorted %}
{% if talk.date > site.time %}
<div class="row">
<div class="col-sm-2 align-self-start">
<span class="badge badge-primary">{{ talk.tag }}</span>
</div>
<div class="col-sm-8">
<strong> {{ talk.title }} </strong> <br/> <em>{{ talk.authors }}</em>, <time datetime="{{ talk.date | date: "%Y-%m-%d" }}">{{ talk.date | date_to_string }}</time>  <br/>

{% if talk.abstract %}  <br/>{% endif %}

<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
  {% if talk.pdf %}<a type="button" href="{{ talk.pdf }}" class="btn bg-danger text-white"><i class="fas fa-file-pdf"></i> pdf</a>{% endif %}
  {% if talk.git %}<a type="button" href="{{ talk.git }}" class="btn bg-info text-white"><i class="fab fa-github"></i> git</a>{% endif %}
</div>
</div>
</div>
{% endif %}
{% endfor %}
</div>


{% for talk in sorted %}

{% capture this_year %}{{ talk.date | date: "%Y" }}{% endcapture %}
{% assign next_i = forloop.index0 | plus: 1 %}
{% capture next_year %}{{ sorted[next_i].date | date: "%Y" }}{% endcapture %}

{% if forloop.first %}
<h2>{{ this_year }}</h2>
<div class="container">
{% endif %}

{% if talk.date < site.time %}
<div class="row">
<div class="col-sm-2 align-self-start">
<span class="badge badge-primary">{{ talk.tag }}</span>
</div>
<div class="col-sm-8">
<strong> {{ talk.title }} </strong> <br/> <em>{{ talk.authors }}</em>, <time datetime="{{ talk.date | date: "%Y-%m-%d" }}">{{ talk.date | date_to_string }}</time>  <br/>

{% if talk.abstract %}  <br/>{% endif %}

<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
  {% if talk.pdf %}<a type="button" href="{{ talk.pdf }}" class="btn bg-danger text-white"><i class="fas fa-file-pdf"></i> pdf</a>{% endif %}
  {% if talk.git %}<a type="button" href="{{ talk.git }}" class="btn bg-info text-white"><i class="fab fa-github"></i> git</a>{% endif %}
</div>
</div>
</div>
{% endif %}

{% if forloop.last %}
</div>
{% else %}
{% if this_year != next_year %}
</div>
<h2>{{ next_year }}</h2>
<div class="container">
{% endif %}
{% endif %}
{% endfor %}
