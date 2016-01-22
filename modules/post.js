import React from 'react'

export default function(props) {
  const {title, contents} = props.file
  const html = {__html: contents.toString()}
  return <html>
    <head>
      <link rel='stylesheet' type='text/css' href='/css/post.css' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
    </head>
    <body>
      <header>
        <a href='/' className='back'>&laquo; Back</a>
        <h1>{title}</h1>
      </header>
      <article dangerouslySetInnerHTML={html} />
    </body>
  </html>
}
