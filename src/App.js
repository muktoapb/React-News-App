import React, {useState, useEffect} from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import Header  from './components/Header/Header';
import TopNews from './components/news/TopNews';



//top-headlines?country=us

function App() {
  const [news, setNews]=useState([]);

  

  useEffect(() => {
    tonewsfunc();
  }, [])
 
  //local storage
  const storedNews = localStorage.getItem('news');

  const tonewsfunc = async()=>{
    if (storedNews) {
      setNews(JSON.parse(storedNews));
    }else{

      const api = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_KEY}`);
      const data = await api.json();
      localStorage.setItem("news", JSON.stringify(data.articles));
      setNews(data.articles)
    }
  }
  
  // console.log(news);

  
  // console.log('other',topnews);
  return (
    <>
      <AppWrapper>
        <Main>
          <Header/>
          <TopNews news={news}/>
        </Main>
        <Sidebar>
          hello
        </Sidebar>
      </AppWrapper>
    </>
  );
}
export default App;



const Main = styled.div`
  width:70%
`;
const Sidebar = styled.div`
  width:30%
`;
const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;

`;