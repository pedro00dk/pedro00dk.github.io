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
      image: https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png
      exp: high
    - name: firebase
      image: https://i1.wp.com/www.point-star.com/wp-content/uploads/2018/11/firebase.png
      exp: high
    - name: react
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png
      exp: high
    - name: mongo
      image: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png
      exp: high
---

### About

[Click here](/about.html) to see my personal info and contact information.


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

### Personal Projects

<ul id='personal-projects' />

<script>
    const personalProjects = document.getElementById('personal-projects')
    const appendRepository = (repositoryData) => {
        const { name, description, descriptionHTML, homepageUrl, url, createdAt, diskUsage, forkCount, updatedAt} = repositoryData
        const container$ = document.createElement('li')
        container$.innerHTML = `
            ::marker
            <a href="${url}">${name}</a>
        `
        personalProjects.append(container$)
    }
</script>

### Testing stuff

[jekyll html layout](/layout_test.html).






<script>
    const token = 'a4e9803f09b78240041f5d60b162a3468901a23b' // public token without any authorization
    const api = 'https://api.github.com/graphql'
    const headers = { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json', Authorization: `bearer ${token}` }
    const query = `
    query {
  viewer {
    login
    anyPinnableItems
    bio
    pinnedItems(first: 10) {
      nodes {
        ... on Repository {
          id
          name
        }
      }
    }
    repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        name
        createdAt
        description
        descriptionHTML
        diskUsage
        forkCount
        homepageUrl
        url
        updatedAt
      }
      totalCount
      totalDiskUsage
    }
  }
}`
  
    fetch(api, { method: 'POST', headers, body: JSON.stringify({query }) })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            json.data.viewer.repositories.nodes.forEach(repo => appendRepository(repo.node))
        })
  

    console.log('hello from markdown file!!!')
</script>





---

Last update: {{ site.time | date: '%d %B %Y - %H:%M' }}
