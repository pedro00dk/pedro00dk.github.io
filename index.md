### My posts

{% for post in site.posts %}
-   [{{ post.title }}]({{ post.url }}) - {{ post.date | date: '%d %B %Y' }}
        - {{ post.categories | join ', ' }}
{% endfor %}

---

Last update: {{ site.time | date: '%d %B %Y - %H:%M' }}
