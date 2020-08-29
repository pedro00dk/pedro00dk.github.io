# Index

Testing jekyll variables:
{{ site }}

{{ site.time }}
{{ site.page }}
{{ site.posts }}
{{ site.related_posts }}
{{ site.static_files }}
{{ site.html_pages }}
{{ site.html_files }}
{{ site.collections }}
{{ site.data }}
{{ site.documents }}
{{ site.categories }}
{{ site.tags }}
{{ site.url }}


{{ page }}

{{ page.content}} 
{{ page.title }}
{{ page.excerpt }}
{{ page.url }}
{{ page.date }}
{{ page.id }}
{{ page.categories }}
{{ page.collection }}
{{ page.tags }}
{{ page.dir }}
{{ page.name }}
{{ page.path }}
{{ page.next }}
{{ page.previous }}

{{ layout }}
{{ content }}

{% for post in site.posts %}
<li>
<a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
