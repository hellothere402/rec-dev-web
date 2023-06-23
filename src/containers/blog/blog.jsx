import React from 'react'
import './blog.css'
import Article from '../../components/articles/article'
const Blog = () => (

    <div className="recycling__blog section__padding" id="blog">
      <div className="recycling__blog-heading">
        <h1 className="gradient__text">View the Development blog for the website.</h1>
      </div>
      <div className="recycling__blog-container">
        <div className="recycling__blog-container_groupA">
          <Article date="May 10, 2023" text="Development blog of the website Starts." />
        </div>
        <div className="recycling__blog-container_groupB">
          <Article date="May 20, 2023" text="Development of the website starts. I've outlined my components, I've decided on the structure and I am going to start with developing the structure of the website and the NavBar." />
          <Article date="May 30, 2023" text="Navigation Bar is complete. Sign in, and Sign Up buttton is complete. I am going to start development on the header." />
          <Article date="June 5, 2023" text="So far, the Navigation Bar, and the Header are complete. Starting to work on the body." />
          <Article date="June 10, 2023" text="Everything is now complete. First draft of the website has been completed. I will now use the React Development Server to test my Website. Make changes to it, and refine it to make it better." />
          <Article date="June 15, 2023" text="I have tested the website over the past few days, I have fixed code, rewritten code to make it more efficent, and changed some aspects of the website to make it better. I will now start my final write up in my slideshow. " />
          
        </div>
      </div>
    </div>
   )

export default Blog