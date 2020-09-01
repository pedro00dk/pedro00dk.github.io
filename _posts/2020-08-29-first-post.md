---
title: Creating and configuring Github Pages
categories: projects notes github-pages
---

# Creating and configuring Github Pages

---
#### This post is about one of my projects: <https://github.com/pedro00dk/pedro00dk.github.io>
---

Github Pages is an extremely useful feature for the creation of simple websites and blogs without having to code anything.
Although it is simple to get started by just writing some markdown in a `README.md`, things became a bit complicated because of special features I wanted to use, and hidden behaviors I faced.

> This post relates my own experience when creating this website.
> Things written here may not be correct and are certainly not to be taken as definition or specification of anything, but it may be helpful if you face similar problems.

### Resources

First, resources I used to create my page to check to use Github Pages properly:
-   Github Pages documentation: <https://docs.github.com/en/github/working-with-github-pages>
-   Jekyll documentation: <https://jekyllrb.com/docs/>
-   Liquid documentation: <https://shopify.github.io/liquid/>

### Setting up the repository and website

After creating a Github Pages repository (which must have the name <username>.github.io), the first thing we have to do is enable page rendering.
This is fairly straightforward, we just have to access repository *Settings* menu and to to the *GitHub Pages* section.
There we can choose the repository branch and directory of the sources to be used for creating the website static files.

Since this specific repository is dedicated to my website, and I was willing to use Github's own features, I just chose the main branch and root directory as source for the website.
I also chose one of the themes available in the *Theme Chooser* section, this automatically committed a new file called `/_config.yml` and set the `theme` option according to the theme I chose.
This is all I had to do to start, at this point I was already able to access the website at <https://pedro00dk.github.io>, and it showed the `README.md` file I had created previously.

> My idea was to create this website with the minimal amount of configuration possible, so I always tried using default behaviors and avoid setting options.
> I also avoided having to clone the repository and testing things localy, everything was done in the browser.

It was cool, but I did not want to show the contents of the `README.md` in the website, but just use it to put information about the repository itself, and that was my first problem.
The Github Pages documentation is does not say anywhere how to change the default requested file when we access the website root, and if you just want to create a simple single page website and still have a separate `README.md` file, you will have problems.

After some time, I finally found how to solve that, I just had to create an `index.html` or `index.md` file (if both are present, `index.html` is chosen).
Although this solution is fairly simple, it is not clear how to do it, I firstly though that there was some option to choose the default file, the same way I did before with branch and folder.

### Creating new pages

Creating new pages was really simple, I just had to create a new file and paste some markdown and add some stuff in the beginning of the file called **front matter**.

The following is the example Github Pages shows:

```markdown
layout: page
title: "PAGE TITLE"
permalink: /URL-PATH/
```

I never saw font matters before, so I just pasted the lines in my on top of my markdown file, and of course, changed the `permalink` to the url I wanted, and everything would work fine, right?
No, it did not work.

I had to search the Jekyll documentation again.
The **front matter** is not part of the markdown specification, but different libraries use it (different formats of exist) to get metadata from files.
Jekyll's front matter is a small list of options in YAML on top of the markdown file (I believe this works with hml), **which set between triple-dashed lines**.

So, the github documentation should have something like:

```markdown
---
layout: page
title: "PAGE TITLE"
permalink: /URL-PATH/
---
```

Finally things started working again.

I also saw that front matter is optional, and the default options were already what I wanted.
-   `layout`: this option defines the html that will be used to wrap the rendered markdown.
    In the Github Pages documentation, the value used is `page`, which I did not found any documentation on Github Pages or Jekyll.
    The `layout: page` also had a side effect, the theme I chose when configuring Github Pages was not working anymore.
    After looking at the Jekyll documentation and source code of the themes offered by github, I found that most themes implement a `default` layout, and a couple also implement a `post` layout.
    These layouts are located inside the `/_layout/` directory
    This happened because the `page` value overrides the layouts set by the `theme` option in `_config.yml`.
    I just removed this option from the front matter and the themming started working again, this is the same as setting `layout: default` (only if you do not override `defaults` in your `_config.yml`).
-   `title`: this options sets the text of the browser tab.
    If not provided, Jekyll tries to infer it from the markdown contents.
    Title is presented in the Jekyll documentation as an front matter option, but I found no documentation explaining what happens when it is not defined.
    After some testing, I found that Jekyll sets the title auomatically based on the markdown content.
    Ignoring the front matter, if the first non empty line is a `h1` header (it does not matter if it is set with `#` or `=`), it is used as title.
    The title is then appended by the site name, like: `<title> | <username>.github.io`   
    If the first empty line after the front matter is not a `h1` header, it uses the format: `<username>.github.io | <repository-description>`.
    I recommend using this option only when the title is too long or for posts (more on that below).
-   `permalink`: Permalink is the path you use to access the rendered file (e.g. if `permalink: /us/about/` then you can access the file through `<username>.github.io/us/about/`).
    If `permalink` is not provided, Jekyll will use the directory structure and file name to set the path, e.g. if there is a file in `/me/about`, you can acess it through `<username>.github.io/about` or `<username>.github.io/about.html`.
    The path `<username>.github.io/about/` with an `/` in the end will not work, except if it is set in the permalink.

### Creating posts

Posts are very similar to pages, but they provide some extra features that are useful for blogging, such as publish date, categories and tags.
Posts must be created inside the `/_posts/` folder and the file name must have the format `YYYY-MM-DD-<file-name>.md`.

Github pages documentation presents again a front marker with missing triple dashes.
The fixed version is below:

```markdown
---
layout: page
title: "POST TITLE"
date: YYYY-MM-DD hh:mm:ss -0000
categories: CATEGORY-1 CATEGORY-2
---
```

The `layout` option work the same way as page option, so I removed it.
The `title` option works a little differently, if this option is not provided, Jekyll uses the `<file-name>` (without the date part) as title rather than inferring from the markdown content.
Because of that, I preferred to use `title` only for post files.

The other options are:
-   `date`: It is used to override the date set in the file name.
    It is possible to also add the time and timezone.
-   `category` or `categories`: List of categories of a post.
-   `tags`: List of tags of a post.

The difference between `categories` and `tags` is minimal, they both can be used to iterate through posts (more on that in the following sections), but category is also used to set the default post link. 
Default links for posts are not based on the directory (`/_post/`), the default path is a concatenation of all post categories and the post date (`/<CAT-1>/<CAT-2>/.../<CAT-N>/YYYY/MM/DD/<title>`). `permalink` is not in the template, but it works the same way as in pages, overriding the default path.

Posts also have one more special front matter variable, which is `published`.
If `published` is set to `false`,  it will remove the post from the array containing all posts (more on that latter).
Another important thing is that if the date of the post is in the future, it will also not be available, although this can be changed by setting `future: true` in `_config.yaml`.

### Front matter and Variables

Front matter can be used to set variables for the page or post.
These variables can be accessed in the markdown by using double braces.
As I talked about before, some of the variables have special meanings, they will be used by Jekyll to configure the page.
The front matter content is YAML, and therefore can be used to create all sorts of objects of different types.
All variables declared in the front matter are contained in an object called `page`.

{% raw %}
```markdown
---
food: pizza
address:
    street: ordinary street
    number: 57
phones:
    - 202-555-0143
    - 202-555-0148
---

food: {{ page.food }}
address: {{ page.address.street }} - {{ page.address.number }}
phones: {{ page.phones[0] }}, {{ page.phones[1] }}
```
{% endraw %}

### Displaying a List of Posts

The pages and posts I created were not accessible from the main page because Jekyll does not create any kind of references among pages.
My intention was initially to add the array of posts in the main page, I would take care of pagination after writing more posts.

Jekyll collects all pages, posts and information, and saves in several variables that can be used inside the pages. For instance, the variable `site.pages` contains an array with all pages, and `site.posts` contains an array in reverse chronological order of all posts.
Each element in the `site.posts` array contained several properties about the post, such as its name, url, categories and so on.
The Jekyll documentation shows a good example on how to iterate through an array of posts without using the brackets syntax:
{% raw %}
```html
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
```
{% endraw %}
The `post` object is the same `page` object for each specific post, so It contains all the information about each post.
This solution worked fine, but now I stated having other problems with formatting.
In my posts index I wanted to add the categories and date of each post.

Categories of the post can be accessed through `post.categories`, and because it is also an array, I could use the same for syntax to print it.
The date was also accessible through `post.date`, although date is a string and can be easily rendered, it used an ISO format, which was hard to read.
At this point I had something like:

{% raw %}
```markdown
{% for post in site.posts %}
-   [{{ post.title }}]({{ post.url }}) - {{ post.date }}  
        - <small>{% for cat in post.categories %}{{ post.categories }}, {% endfor %}</small>
{% endfor %}
```
{% endraw %}

Both the rendering of categories and the date looked weird, the code to render categories was convoluted for such simple task and I had to format the date somehow in the markdown.

### Liquid

At this point I still did not understand what Liquid really is, but I saw some examples along the Jekyll documentation and knew it could be used to process the content of variables declared in the front matter or injected by Jekyll.

Before proceeding to the next steps of the blog construction, I had to take a look at Liquid documentation.
It turns out all the things I used to access variables and loops are part of Liquid.

Liquid is basically a set of operations to process objects, divided into three groups:
-   A way to show the content of objects in the page (double braces syntax: {% raw %} `{{ object }}` {% endraw %});
-   A set of tags that can be used to create conditionals and iterate through objects (brace percent syntax: {% raw %} `{% tag %}` {% endraw %});
-   Operations called "filters", to process and transform objects (pipe syntax: `|`).

### Going back to variables

So far, I have used the front matter to declare variables and access them in the markdown.
However, the YAML in the front matter is not part of Liquid, all content written there is preprocessed by Jekyll, and then injected into the Liquid processing stage.

Liquid has its own syntax for declaring variables and creating objects using the assign tag:

{% raw %}
```
{% assign my_string = "Hello World!" %} # string
{% assign my_int = 25 %}                # number
{% assign my_float = 39.756 %}          # number
{% assign my_truthy_bool = true %}      # bool
{% assign my_falsy_bool = false %}      # bool
```
{% endraw %}

Other types that Liquid can handle are objects, arrays and Nil.
These types can not be created using the {% raw %}`{% assign %}`{% endraw %} tag.
Objects can only be created by Jekyll the front matter, and then accessed by Liquid tags using the `.` syntax.
Arrays also can be created in the front matter, but it is possible to use some of Liquid's filters to split string variables and transform them in arrays.
The Nil is a special case, it is the absence of a value, that is produced when an undeclared variable is accessed.

### Using Liquid's filters to process posts categories date

After some search in the Liquid's documentation, I found a less convoluted way to process the array of categories and the date using filters.

Arrays can be easily joined into a single string using the join filter:

{% raw %}
```markdown
<!-- page.categories = ["projects", "notes", "github-pages"] -->

{{ post.categories | join: ', ' }}
<!--outputs: -->
projects, notes, github-pages
```
{% endraw %}

Date strings can be formatted using the date filter, the documentation of the format syntax can be accessed from the filter page.

{% raw %}
```markdown
<!-- page.date = 2020-08-29 14:00:00 +0000 -->

{{ post.date | date: '%d %B %Y' }}
<!--outputs: -->
29 August 2020
```
{% endraw %}

Putting they together, I was finally able to render my list of posts the way I wanted.

### Conclusion

With Github Pages, Jekyll and Liquid, I was able to create my own page easily, using only markdown and without having to care about local setups or configurations.
Still, all technologies I used were new for me, and it took some time to understand how they all work together.
But from this point, developing and adding content to the site was much easier.

If you are willing to create a simple site to showcase your projects, Github Pages is the way to go.
It is very simple to get started in the platform and it allows you to write your page incrementally.

---

Thanks for reading!
