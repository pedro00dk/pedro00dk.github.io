---
langs_tools:
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
    - name: nodejs
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png
      exp: high
    - name: c
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/c/c.png
      exp: low
    - name: rust
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rust/rust.png
      exp: low
    - name: sql
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png
      exp: low
    - name: git
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png
      exp: high
    - name: docker
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png
      exp: high
    - name: gcp
      image: https://icon2.cleanpng.com/20180503/eoe/kisspng-google-cloud-platform-internet-of-things-cloud-com-google-plus-5aeb20daab7612.0669413915253588107023.jpg
      exp: high
    - name: firebase
      image: https://icon2.cleanpng.com/20180609/ryh/kisspng-firebase-cloud-messaging-google-cloud-messaging-api-as-a-service-5b1bf782ac0ca2.2103995315285594907047.jpg
      exp: high
    - name: react
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png
      exp: high
    - name: mongo
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png
      exp: high
---

### Languages and Tools

##### Highly experienced:

<div>
{% for language in page.langs_tools %}
    {% if language.exp == 'high' %}
<img src="{{ language.image }}" alt="{{ language.name }}" style="display: inline-block; width: 50px; padding-right: 10px;" />
    {% endif %}
{% endfor %}
</div>

##### Less experienced:

<div>
{% for language in page.langs_tools %}
    {% if language.exp == 'low' %}
<img src="{{ language.image }}" alt="{{ language.name }}" style="width: 40px; padding-right: 10px;" />
    {% endif %}
{% endfor %}
</div>

### Posts

{% for post in site.posts %}
-   [{{ post.title }}]({{ post.url }}) - {{ post.date | date: '%d %B %Y' }}  
        - <small>**{{ post.categories | join ', ' }}**</small>
{% endfor %}

---

Last update: {{ site.time | date: '%d %B %Y - %H:%M' }}
