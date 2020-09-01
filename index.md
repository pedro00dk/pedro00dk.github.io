---
languages:
    - name: python
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png
      exp: high
    - name: java
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png
      exp: high
    - name: csharp
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/csharp/csharp.png
      exp: high
    - name: shell
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bash/bash.png
      exp: low
    - name: html
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png
      exp: high
    - name: css
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png
      exp: high
    - name: js
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png
      exp: high
    - name: ts
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png
      exp: high
    - name: rust
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rust/rust.png
      exp: low
    - name: c
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/c/c.png
      exp: low
    - name: cpp
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/cpp/cpp.png
      exp: low
---

### Languages and Tools

##### Highly experienced:

{% for language in page.languages %}
    {% if language.exp == 'high' %}
        <img align="left" alt="{{ language.name }}" width="35px" src="{{ language.image }}" />
    {% endif %}
{% endfor %}

##### Less experienced:

{% for language in page.languages %}
    {% if language.exp == 'low' %}
        <img align="left" alt="{{ language.name }}" width="25px" src="{{ language.image }}" />
    {% endif %}
{% endfor %}

### Posts

{% for post in site.posts %}
-   [{{ post.title }}]({{ post.url }}) - {{ post.date | date: '%d %B %Y' }}  
        - <small>**{{ post.categories | join ', ' }}**</small>
{% endfor %}

---

Last update: {{ site.time | date: '%d %B %Y - %H:%M' }}
