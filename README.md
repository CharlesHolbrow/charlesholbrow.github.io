# Hosing my MIT Media Lab` page on GitHub Pages

Current Deployment Workflow:

1. Clone my blog repo https://www.github.com/CharlesHolbrow/blog
2. Build it `npm install; make`
3. Copy the `build` directory from blog into the `docs` directory here


Try:

```bash
rsync -r docs/ ../node/blog/build/
```
