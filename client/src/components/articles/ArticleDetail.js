import React from 'react';


const ArticleDetail = ({article, deleteArticle}) => {
  
  const handleDelete = () => {
    fetch(`http://localhost:8080/articles/${article.id}`, {
      method: 'DELETE',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    deleteArticle(article.id);
  }

  const journalist = article["_embedded"].journalist
  
  return (
    <tr>
      <td>{article.headline}</td>
      <td>{journalist.firstName} {journalist.lastName} </td>
      <td>{article.summary}</td>
      <td>{article.date}</td>
      <td>{article.category}</td>
      <td onClick={handleDelete} >DELETE</td>
    </tr>
  )
}


export default ArticleDetail;
