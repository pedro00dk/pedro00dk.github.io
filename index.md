### My posts
{% for post in site.posts %}
-   [{{ post.title }}]({{ post.url }}) - {{ post.date | site.time | split ' ' | first | split '-' | reverse | join: '/' }}
        - categories: {{ page.categories | join ', ' }}
{% endfor %}

---

Last update: {{ 'now' | date: "%d %b %Y %H:%M" }}.

Last update: {{ site.time | split ' ' | first | split '-' | reverse | join: '/' }}
