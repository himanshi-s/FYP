import React, { useState, useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from "./components/NewsCards/NewsCards";
import wordsToNumbers from 'words-to-numbers';
const alankey = '28eeee6646fb6004381645abb0c9a1322e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const terms = [];
  useEffect( ()=> {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles, number, term}) => {
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
          setActiveArticle(-1);
          // console.log(articles);
        }else if (command==='newTerms'){
          console.log(term);
          console.log(typeof(term));
          let value = [term];
          Array.prototype.push.apply(terms, value);
          // setTerms([...terms,"kjjdf"]);
          
        }
         else if (command ==='highlight' ) {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command ==='open' ) {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true}) : number;
          const article = articles[parsedNumber - 1];

          if(parsedNumber >20){
            alanBtn().playText('please try that again.')
          }else if(article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...')
          }
          // window.open(articles[number],url,'_blank');
        }
      }
    })
  },  [ ]);
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Alan AI News App</h1>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />

    </div>
  )
}
export default App;