# fxtext-react
A React component that retrieves an article from the fx(hash) API and converts Markdown to JSX

From your CLI:
```
npm install fxtext-react
```

Usage:

```js
//App.jsx
...
import FxArticle from 'fxtext-react'

export default function() {
  //this will retrieve the article available at fxhash.xyz/article/example 
  const [slug, setSlug] = useState('example')

  return (
    <div>
      <FxArticle slug='{slug}' />
    </div>
  )
  ...
}

```

The Article contains the article's `title`, `description`, and `body`.

To style in CSS, the respective class names live under the `fx-article` container as `fx-article-title`, `fx-article-desc`, and `fx-article-body`

To keep things clean, I've left out any highlighting for code blocks. If you'd like, highlight.js is my recommended solution for highlighting syntax.

 



