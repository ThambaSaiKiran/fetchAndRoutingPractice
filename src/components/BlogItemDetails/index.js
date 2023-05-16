// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({isLoading: false, blogItemDetails: updatedData})
  }

  renderBlogItemsFunc = () => {
    const {blogItemDetails} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogItemDetails
    return (
      <div className="itemDetailCont">
        <h1>{title}</h1>
        <div className="authCont">
          <img className="avatarImage" src={avatarUrl} alt={author} />
          <p>{author}</p>
        </div>
        <img className="norImage" src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemsFunc()
        )}
      </div>
    )
  }
}

export default BlogItemDetails

