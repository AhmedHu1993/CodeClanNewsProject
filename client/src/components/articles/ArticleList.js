import React from 'react';
import ArticleDetail from './ArticleDetail';

const ArticleList = ({articles}) => {
  const articlesNodes = articles.map((article) => {
    return (
      <ArticleDetail key={article.id} article={article} />
    )
  })
  return(
    <div className = "table" >
      <tbody>
        <tr>
          <th>Headline</th>
          <th>Summary</th>
          <th>Date</th>
          <th>Category</th>
        </tr>
          {articlesNodes}
      </tbody>
    </div>
  )
}

export default ArticleList;
