import React from 'react'
import './blog.css'
import Article from '../../components/articles/article'
const Blog = () => (

    <div className="recycling__blog section__padding" id="blog">
      <div className="recycling__blog-heading">
        <h1 className="gradient__text">View the progress of the website, <br/> I am logging the progress.</h1>
      </div>
      <div className="recycling__blog-container">
        <div className="recycling__blog-container_groupA">
          <Article date="May 10, 2023" text="Development of the website Starts." />
        </div>
        <div className="recycling__blog-container_groupB">
          <Article date="May 20, 2023" text="First quarter of the website is complete." />
          <Article date="May 30, 2023" text="Second quarter of the website is complete, making it half complete." />
          <Article date="June 5, 2023" text="Website is complete. Testing has begun on the website." />
          <Article date="June 10, 2023" text="I have made many fixes to the website. Final Tests are undergoing." />
          
        </div>
      </div>
    </div>
   )

export default Blog