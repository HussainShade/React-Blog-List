// Write your JS code here
import './index.css'

const BlogItem = ({blogDetails}) => {
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="title-and-date-container">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
