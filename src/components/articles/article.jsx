import React from 'react'
import './article.css'

const Article = ({date, text}) => (
    <div className="recycling__blog-container_article">
      <div className="recycling__blog-container_article-image">
    
    </div>
    <div className="recycling__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Done.</p>
    </div>
  </div>
  );

export default Article