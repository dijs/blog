import React from 'react'

function renderPost({title, date, snippet, paths}) {
  const path = 'posts/' + paths.name + '.html'
  const html = {__html: snippet.toString()}
  return <div className='post'>
    <h2>
      <a href={path}>{title}</a>
    </h2>
    <time>{date}</time>
    <div className='snippet' dangerouslySetInnerHTML={html} />
  </div>
}

export default function({posts}) {
  return <html>
    <head>
      <link rel='stylesheet' type='text/css' href='css/index.css' />
      <link rel="icon" type="image/png" href="public/favicon.png" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>Blog</title>
    </head>
    <body>
      <header>
        <img src='public/avatar.svg' />
        <h1>Richard <span>van der Dys III</span></h1>
        <h2>Lessons Learned</h2>
      </header>
      <div className='posts'>
      {posts.map(renderPost)}
      </div>
    </body>
  </html>
}
