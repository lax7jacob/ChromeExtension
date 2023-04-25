
// Grab the article with queryselector
const article = document.querySelector('article');

//handle the null case
if (article) {
  
  //Regex to find all the words within a string
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  
  const wordCount = [...words].length;
  
  
  //Create badge document element
  const badge = document.createElement('p');
  // Use the same styling as the publish information in an article's header
  badge.classList.add('color-secondary-text', 'type--caption');
  badge.textContent = `⏱️ ${wordCount} words`;
  
  
  // Support for API reference docs
  const heading = article.querySelector('h1');
  // Support for article docs with date
  const date = article.querySelector('time')?.parentNode;
  
  
  (date ?? heading).insertAdjacentElement('afterend', badge);
}
else
{
 //Null case
  console.log("Error: Article not found!");
  
}
