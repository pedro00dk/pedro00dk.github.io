### My posts
{% for post in site.posts %}
-   [{{ post.title }}]({{ post.url }}) - {{ post.date }}
        - categories: <!--{{ page.categories | join ', ' }}-->
{% endfor %}

<!-- | site.time | split ' ' | first | split '-' | reverse | join: '/'  -->
---

Last update: {{ 'now' | date: "%d %b %Y %H:%M" }}

Last update: {{ site.time | split ' ' | first | split '-' | reverse | join: '/' }}
