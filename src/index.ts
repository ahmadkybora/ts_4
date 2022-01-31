import { Article } from './Article';
let article = new Article();

document.getElementById('app').innerHTML = article.html();
console.log(article.first_name);