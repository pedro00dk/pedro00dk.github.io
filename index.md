### My posts

{% for post in site.posts %}
-   [{{ post.title }}]({{ post.url }}) - {{ post.date }}
        - categories: {{ page.categories }}
{% endfor %}

---

Last update: {{ site.time | date: '%d %B %Y - %H:%M' }}

Last update: {{ site.time | date: '%d %B %Y - %H:%M' }}

Last update: {{ 'now' | date: '%d %B %Y - %H:%M' }}
