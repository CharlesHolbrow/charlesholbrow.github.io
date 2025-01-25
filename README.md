# Hosing my MIT Media Lab` page on GitHub Pages

Current Deployment Workflow:

1. Clone my blog repo https://www.github.com/CharlesHolbrow/blog
2. Build it `npm install; make`
3. rsync the build dir. For example:

```bash
rsync -r  ../node/blog/build/ docs/
```

THis ensures that the automatically generated (by github pages) CNAME file is not overwritten.
