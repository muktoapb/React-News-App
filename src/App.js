import React, {useState, useEffect} from 'react';
import './App.css';
import Header  from './components/Header/Header';
import TopNews from './components/news/TopNews';



//top-headlines?country=us

function App() {
  const [topnews, setTopnews]=useState([]);

  

  useEffect(() => {
    tonewsfunc('top-headlines?country=us');
  }, [])
 
  //local storage
  const topNews = localStorage.getItem('topnews');

  const tonewsfunc = async(type)=>{
    if (topNews) {
      setTopnews(JSON.parse(topNews));
    }else{
      const api = await fetch(`https://newsapi.org/v2/${type}&apiKey=${process.env.REACT_APP_NEWS_KEY}`);
      const data = await api.json();
      localStorage.setItem("topnews", JSON.stringify(data.articles));
      setTopnews(data.articles)
    }
  }
  
  console.log(topnews);

  
  // console.log('other',topnews);
  return (
    <div className="App">
      <div className="app_wrapper">
        <div className="main">
          <Header/>
          <TopNews/>
        </div>
        <div className="sidebar">
        </div>
      </div>
    </div>
  );
}

export default App;
