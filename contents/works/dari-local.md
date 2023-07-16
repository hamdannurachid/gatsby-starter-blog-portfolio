---
key: works
date: 2023-07-16T00:24:15.833Z
title: dari local
thumbnailImage: /assets/cover-simpati.png
---
# Adding Markdown Pages

## TABLE OF CONTENTS

* [Prerequisites](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#prerequisites)
* [Instructions](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#instructions)

  * [Read files into Gatsby from the filesystem](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#read-files-into-gatsby-from-the-filesystem)
  * [Transform markdown to HTML and frontmatter to data using gatsby-transformer-remark](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#transform-markdown-to-html-and-frontmatter-to-data-using-gatsby-transformer-remark)
* [Create a collection route for the markdown files](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#create-a-collection-route-for-the-markdown-files)
* [Additional Resources](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#additional-resources)

## EXAMPLES

* [ using-remark](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-remark)



![](/assets/cover-simpati.png)

Gatsby can use markdown files to create pages in your site. You add plugins to read and understand folders with markdown files and from them create pages automatically.

Here are the steps Gatsby follows for making this happen.

1. Read files into Gatsby from the filesystem
2. Transform markdown to HTML and [frontmatter](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files) to data
3. Add a markdown file
4. Create a collection route component for the markdown files