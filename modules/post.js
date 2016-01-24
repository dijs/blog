import React from 'react'

export default function(props) {
  const {title, date, contents} = props.file
  const html = {__html: contents.toString()}
  return <html>
    <head>
      <link rel='stylesheet' type='text/css' href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/styles/default.min.css' />
      <link rel='stylesheet' type='text/css' href='css/post.css' />
      <link rel="icon" type="image/png" href="public/favicon.png" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
    </head>
    <body>
      <header>
        <a href='/' className='back'>&laquo; Back</a>
        <h1>{title}</h1>
      </header>
      <time>{date}</time>
      <article dangerouslySetInnerHTML={html} />
    </body>
  </html>
}
