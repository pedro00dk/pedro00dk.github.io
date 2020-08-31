### My posts

{% for post in site.posts %}
-   [{{ post.title }}]({{ post.url }}) - {{ post.date | date: '%d %B %Y }}
        - {{ page.categories[0] }}
        - {{ page.categories[1] }}
{% endfor %}

---

Last update: {{ site.time | date: '%d %B %Y - %H:%M' }}
