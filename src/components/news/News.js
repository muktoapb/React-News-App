import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { SingleNews, Title } from '../style';


export default function News({ news }) {
    // let allNews = news?.slice(0,5);
    // const [newsPage, setNewsPage]=useState(news?.slice(0,5))



    // const updateNews =(i)=>{
    //     setNewsPage(i);
    // }

    // useEffect(()=>{
    //     updateNews(allNews);
    // },[]);

    console.log(news);
    return (
        <div className="newsarea">
            <Title>Latest News</Title>
            <NewsListWrapper>
                {
                    news.slice(4, 10).map((sn, index) => (
                        <SingleNews key={index}>
                            <div className="source">
                                {sn.source?.name}
                            </div>
                            <div className="image_area">
                                <img src={sn.urlToImage} alt={sn?.title} />
                            </div>
                            <div className="newsdetails">
                                <h3>{sn?.title}</h3>
                                <p className='details'>{sn.description}</p>
                                <a href={sn.url} target="_blank" rel="noopener noreferrer">Read News</a>
                            </div>
                        </SingleNews>
                    ))
                }
            </NewsListWrapper>
        </div>
    )
}

const NewsListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
`;
