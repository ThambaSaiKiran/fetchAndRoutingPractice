// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  return (
    <Link to={`/blogs/${id}`} className="itemLink">
      <div className="blogItemCont">
        <img className="norImage" src={imageUrl} alt={title} />
        <div className="itemInfo">
          <p>{topic}</p>
          <p>{title}</p>
          <div className="authorInfo">
            <img className="avatarImage" src={avatarUrl} alt={author} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
