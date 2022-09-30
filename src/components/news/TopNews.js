import React from 'react'
import styled from 'styled-components';


export default function TopNews({ news }) {
  const topFive = news.slice(0, 3);
  // console.log(topFive);
  return (
    <div className="topNew_wrapper">
      {
        topFive?.map((n, index) => (
          // console.log(n);
          <TopCard key={index}>
            <div className="card_text">
              <h3>{n?.title}</h3>
              <p>{n.description}</p>
              <a href="#">Read More</a>
            </div>
            <div className="card_image">
              <img src={n.urlToImage} alt={n.title} />
            </div>
          </TopCard>

        ))
      }
    </div>
  );

}


//Styled element
const TopCard = styled.article`
  display: grid;
  grid-template-columns: 50% auto;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  .card_text{
    padding: 15px;
    h3{
      font-size: 24px;
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 15px;
    }
    p{
      font-size: 16px;
      margin-bottom: 10px;
    }
    a{
      display: inline-block;
      text-decoration: none;
      background-color: #000;
      color: #fff;
      padding: 5px 15px;
      font-size: 13px;
    }
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;