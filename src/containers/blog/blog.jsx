import React from 'react'
import './blog.css'
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
const Blog = () => (

    <div className="recycling__blog section__padding" id="blog">
      <div className="recycling__blog-heading">
        <h1 className="gradient__text"> Join the movement, <br/> We are blogging the progress.</h1>
      </div>
      <div className="recycling__blog-container">
        <div className="recycling__blog-container_groupA">
          <Article imgUrl={blog01} date="25/05/2020" text="My lovely bin" />
        </div>
        <div className="recycling__blog-container_groupB">
          <Article imgUrl={blog02} date="25/05/2020" text="My lovely bin" />
          <Article imgUrl={blog03} date="25/05/2020" text="My lovely bin" />
          <Article imgUrl={blog04} date="25/05/2020" text="My lovely bin" />
          <Article imgUrl={blog05} date="25/05/2020" text="My lovely bin" />
        </div>
      </div>
    </div>
   )

export default Blog