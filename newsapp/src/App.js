import React, { useState, useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from "./components/NewsCards/NewsCards";

const alankey = '28eeee6646fb6004381645abb0c9a1322e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect( ()=> {
    alanBtn({
      key: alankey,
      onCommand: ({command,articles}) => {
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
          setActiveArticle(-1);
          // console.log(articles);
        } else if (command ==='highlight' ) {
          setActiveArticle((prevActiveArticle) => prevActiveArticle+1);
        }
      }
    })
  }, [] )
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Alan AI News App</h1>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}
export default App;