// Write your JS code here
// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, fetchDataList: []}

  componentDidMount() {
    this.fetchDataFunc()
  }

  fetchDataFunc = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))
    this.setState({isLoading: false, fetchDataList: updatedData})
  }

  render() {
    const {isLoading, fetchDataList} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          fetchDataList.map(eachItem => (
            <BlogItem key={eachItem.id} blogData={eachItem} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
