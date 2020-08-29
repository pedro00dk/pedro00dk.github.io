# Index

Testing jekyll variables:

### site:
{{ site }}

### site.time:
{{ site.time }}

### site.page:
{{ site.page }}

### site.posts:
{{ site.posts }}

### site.related_posts:
{{ site.related_posts }}

### site.static_files:
{{ site.static_files }}

### site.html_pages:
{{ site.html_pages }}

### site.html_files:
{{ site.html_files }}

### site.collections:
{{ site.collections }}

### site.data:
{{ site.data }}

### site.documents:
{{ site.documents }}

### site.categories:
{{ site.categories }}

### site.tags:
{{ site.tags }}

### site.url:
{{ site.url }}

### page:
{{ page }}

### page.content:
{{ page.content}} 

### page.title:
{{ page.title }}

### page.excerpt:
{{ page.excerpt }}

### page.url:
{{ page.url }}

### page.date:
{{ page.date }}

### page.id:
{{ page.id }}

### page.categories:
{{ page.categories }}

### page.collection:
{{ page.collection }}

### page.tags:
{{ page.tags }}

### page.dir:
{{ page.dir }}

### page.name:
{{ page.name }}

### page.path:
{{ page.path }}

### page.next:
{{ page.next }}

### page.previous:
{{ page.previous }}

### layout:
{{ layout }}

### content:
{{ content }}

### Posts:
{% for post in site.posts %}
-    {{ post.url }}: {{ post.title }}
{% endfor %}
