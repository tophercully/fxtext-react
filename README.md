# react-fxtext
A React component that retrieves an article from the fx(hash) API and converts Markdown to JSX

From your CLI:
```
npm install react-fxtext
```

Usage:

```js
//App.jsx
...
import Article from 'react-fxtext'

export default function() {
  //this will retrieve the article available at fxhash.xyz/article/example 
  const [slug, setSlug] = useState('example')

  return (
    <div>
      <Article slug='{slug}' />
    </div>
  )
  ...
}

```


This package utilizes highlight.js to highlight your code blocks by default. If you want to use your custom syntax highlighting.
this can be toggled off by including:
```jsx 
 <Article highlightDisabled='true' />
```

The Article contains the article's `title`, `description`, and `body`.

To style in CSS, the respective class names live under the `fx-article` container as `fx-article-title`, `fx-article-desc`, and `fx-article-body`

 



