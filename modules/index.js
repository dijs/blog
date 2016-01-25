import React from 'react'
import sortBy from 'lodash/sortBy'
import moment from 'moment'

function renderPost({title, date, snippet, paths}) {
  const path = 'posts/' + paths.name + '.html'
  const html = {__html: snippet.toString()}
  const dateFormatted = moment(date, 'MM/DD/YYYY').format('MMMM DD, YYYY')
  return <div className='post'>
    <h2>
      <a href={path}>{title}</a>
    </h2>
    <time>{dateFormatted}</time>
    <div className='snippet' dangerouslySetInnerHTML={html} />
  </div>
}

export default function({posts}) {
  const sortedPosts = sortBy(posts, post => -moment(post.date, 'MM/DD/YYYY').valueOf())
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
      {sortedPosts.map(renderPost)}
      </div>
    </body>
  </html>
}
