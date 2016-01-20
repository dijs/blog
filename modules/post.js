import React from 'react'

export default function(props) {
  const {title, contents} = props.file
  const html = {__html: contents.toString()}
  return <div>
    <title>{title}</title>
    <article dangerouslySetInnerHTML={html} />
  </div>
}
