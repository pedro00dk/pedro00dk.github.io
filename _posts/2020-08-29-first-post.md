---
title: Creating and configuring Github pages
categories: notes github-pages
---

# Creating and configuring Github pages

Github Pages is an extremely useful feature for the creation of simple websites and blogs without having to code anyting.
Although it is simple to get started by just writing some markdown in a `README.md`, things became a bit complicated because of speciall features I wanted to use, and hidden behaviors I faced.

> This is my first post in my own page, and it reports my experiences when creating this website.
> Things written here may not correct and are certainly not to be taken as definition or specification of anything, but it may help you if you have similar problems.

### Resources

First, resources I used to create my page to check to use Github Pages properly:
-   Github Pages documentation: https://docs.github.com/en/github/working-with-github-pages
-   jekyll documentation: https://jekyllrb.com/docs/
-   Liquid documentation: https://shopify.github.io/liquid/

### Setting up the repository and website

After creating a Github Pages repository (which must have the name <username>.github.io), the first thing we have to do is enable page rendering.
This is fairly straightforward, we just have to access repository *Settings* menu and to to the *GitHub Pages* section.
There we can choose the repository branch and directory of the sources to be used for creating the website static files.

Since this specific repository is dedicated to my website, and I was willing to use Github's own features, I just chose the main branch and root directory as source for the website.
I also chose one of the themes avaliable in the *Theme Chooser* section, this automatically commited a new file called `_config.yml` and set the `theme` option according to the theme I chose.
This is all I had to do to start, at this point I was already able to access the website at https://pedro00dk.github.io, and it showed the `README.md` file I had created previously.
**My idea was to create this website with the minimal amount of configuration possible, so I always tried using default behaviors and avoid setting options.**

It was cool, but I did not want to show the contents of the `README.md` in the website, but just use it to put information about the repository itself, and that was my first problem.
The Github Pages documentation is does not say anywhere how to change the default requested file when we access the website root, and if you just want to create a simple single page website and still have a separate `README.md` file, you will have problems.

After some time, I finally found how to solve that, I just had to create an `index.html` or `index.md` file (if both are present, `index.html` is chosen).
Although this solution is fairly simple, it is not clear how to do it, I firstly though that there was some option to choose the default file, the same way I did before with branch and folder.

### Creating new pages

Creating new pages was realy simple, I just had to create a new file and paste some markdown and add some stuff in the begginning of the file called **front matter**.
This is the example Github Pages presents:
```
layout: page
title: "PAGE TITLE"
permalink: /URL-PATH/
```
I never saw font matters before, so I just pasted the lines in my on top of my markdown file, and of course, changed the `permalink` to the url I wanted, and everything would work fine, right?
No, it did not work.

I had to search the jekyll documentation again.
The **front matter** is not part of the markdown specification, but different libraries use it (different formats of exist) to get metadata from files.
Jekyll's front matter is a small list of options in YAML on top of the markdown file (I believe this works with hml), **which set between triple-dashed lines**.
So, the github documentation should have something like:
```
---
layout: page
title: "PAGE TITLE"
permalink: /URL-PATH/
---
```
Finally things started working again.

I also saw that front matter is optional, and the default options were already what I wanted.
-   `layout`: this option defines the html that will be used to wrap the rendered markdown.
    In the Github Pages documentation, the value used is `page`, which I did not found any documentation on Github Pages or jekyll.
    The `layout: page` also had a side effect, the theme I chose when configuring Github Pages was not working anymore.
    This happened because the `page` value overrides the layouts set by the `theme` option in `_config.yml`.
    I just removed this option from the front matter and the themming started working again, this is the same as setting `layout: default` (only if you do not override `defaults` in your `_config.yml`).
-   `title`: this options sets the text of the browser tab.
    If not provided, jekyll tries to infer it from the markdown contents.
    Title is presented in the jekyll documentation as an front matter option, but I found no documentation explaining what happens when it is not defined.
    After some testing, I found that Jekyll sets the title auomatically based on the markdown content.
    Ignoring the front matter, if the first non empty line is a `h1` header (it does not matter if it is set with `#` or `=`), it is used as title.
    The title is then appended by the site name, like: `<title> | <username>.github.io`   
    If the first empty line after the front matter is not a `h1` header, it uses the format: `<username>.github.io | <repository-description>`.
    I recommend using this option only when the title is too long or for posts (more on that below).
-   `permalink`: Permalink is the path you use to access the rendered file (e.g. if `permalink: /us/about/` then you can access the file through `<username>.github.io/us/about/`).
    If `permalink` is not provided, jekyll will use the directory structure and file name to set the path, e.g. if there is a file in `/me/about`, you can acess it through `<username>.github.io/about` or `<username>.github.io/about.html`, the path `<username>.github.io/about/` with an `/` in the end will not work, except if you set it in the permalink.

### Creating posts

Posts are very similar to pages, but they provide some extra features that are usefull for blogging, such as publish date, categories and tags.
Posts must be created inside the `/_posts` folder and the file name must have the format `YYYY-MM-DD-<file-name>.md`.

Github pages documentation presents again a front marker with missing triple dashes.
The fixed version is bellow:
```
---
layout: page
title: "POST TITLE"
date: YYYY-MM-DD hh:mm:ss -0000
categories: CATEGORY-1 CATEGORY-2
---
```

The `layout` option work the same way as page option, so I removed it.
The `title` option works a little differently, if this option is not provided, jekyll uses the `<file-name>` (without the date part) as title rather than infering from the markdown content.
Because of that, I prefered to use `title` only in post files.

The other options are:
-   `date`: It is used to override the date set in the file name.
    It is possible to also add the time and timezone.
-   `category` or `categories`: List of categories of a post.
-   `tags`: List of tags of a post.

The difference between `categories` and `tags` is minimal, they both can be used to iterate through posts (more on that in the following sections), but category is also used to set the default post link. 
Default links for posts are not based on the directory (`/_post`), the default path is a concatenation of all post categories and the post date (`/<CAT-1>/<CAT-2>/.../<CAT-N>/YYYY/MM/DD/<title>(.html)?`). `permalink` is not in the template, but it works the same way as in pages, overriding the default path.

Posts also have one more special front matter variable, which is `published`.
If `published` is set to `false`,  it will remove the post from the list containing all posts (more on that latter).
Another important thing is that if the date of the post is in the future, it will also not be available, although this can be changed by setting `future: true` in `_config.yaml`.

### Front matter and Variables

Although I avoid setting options in the front matter, some things have to be said for educational purposes.
Front matter can be used to set variables to be used to set variables that can be used in the markdown by using double braces:
```
---
food: Pizza
---

# {&nbsp;{ page.food }}

Note: do not copy the line above, there is n &nbsp character between the braces to avoid pre-processing
```

The `layout` variable is alwyays available, `date` is always avialable for posts only.
Other variables, such as `title`, `categories`, `tags` and `published` are available only if manually set.
Some have different names, for instance, the `permalink` can be access through `url`.

Besides these variables, there are also may others containing all sorts of things.
Some are available globally and for the entire site, and others are different for each page.
A list with there variables can be accessd at: https://jekyllrb.com/docs/variables/

Some examples:
-   title: {{ page.title }}
-   url (permalink): {{ page.url }}

### Liquid

Before proceding to the next steps of the blog construction, I had to take alook at Liquid.
Liquid is a template language for creating web apps, jekyll uses it, so it is available by default on Github Pages.
