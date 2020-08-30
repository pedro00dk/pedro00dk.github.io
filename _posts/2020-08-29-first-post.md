---
layout: post
title: Configuring Github pages (jekyll)
categories: CATEGORY-1 CATEGORY-2
tags: tag1 tag2
---

# Creating and configuring Github pages (jekyll)

Github Pages is an extremely useful feature for the creation of simple websites and blogs without having to code anyting.
Although it is simple to get started by just writing some markdown in a `README.md`, things became a bit complicated because speciall features I wanted to use, and hidden behaviors I faced.

> This is my first post in may own page, and it reports my experiences when creating this website.
> Things written here may not correct and are certainly not to be taken as definition or specification of anything.

### Resources

First, resources I used to create my page to check to use Github Pages properly:
-   Github Pages documentation: https://docs.github.com/en/github/working-with-github-pages
-   jekyll documentation: https://jekyllrb.com/docs/

### Setting up the repository and website

After creating a Github Pages repository (which must have the name <username>.github.io), the first thing we have to do is enable page rendering.
This is fairly straightforward, we just have to access repository *Settings* menu and to to the *GitHub Pages* section.
There we can choose the repository branch and directory of the sources to be used for creating the website static files.

Since this specific repository is dedicated to my website, and I was willing to use Github's own features, I just chose the main branch and root directory as source for the website.
This is all I had to do to start, at this point I was already able to access the website at https://pedro00dk.github.io, and it showed the `README.md` file I had created previously.

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
permalink: /URL-PATH/ # eg: /about of /about.html
---
```

Finally things started working again.
