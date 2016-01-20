import React from 'react'

function renderPost({title, date, snippet, filename}) {
  const path = filename.replace(/md$/, 'html')
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
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </head>
    <body>
      <header>
        <img src='//placehold.it/389x250&text=CARTOON' />
        <h1>Richard van der Dys III</h1>
        <h2>Lessons Learned</h2>
      </header>
      <div className='posts'>
      {posts.map(renderPost)}
      </div>
    </body>
  </html>
}
