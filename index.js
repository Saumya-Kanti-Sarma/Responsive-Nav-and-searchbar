const NavBtn = document.getElementById('nav-btn');
const Search = document.getElementById('search');
const SearchBtn = document.getElementById('search-btn');
const Mobile = document.querySelector('.mobile');
const Suggest = document.querySelector('.suggs');
const searchArea = document.querySelector('.search-area');

let clicks = 0;
NavBtn.addEventListener('click', () => {

  clicks++;
  if (clicks % 2) {
    NavBtn.src = 'close.svg';
    Mobile.style.display = 'block';
    searchArea.style.display = 'none';

  }
  else {
    Mobile.style.display = 'none';
    NavBtn.src = 'menu.svg';
    searchArea.style.display = 'block';
  }
});


const list = [
  'Saumya',
  'Mark Zuckerberg',
  'Bill Gates',
  'Elon Musk',
  'Anupam Mittal',
  'Asnir Grovr',
  'Ratan Tata',
  'Nita Ambani',
  'Gautam Adani',
  'Mukesh Ambani',
]

Search.onkeyup = () => {
  const chars = Search.value;
  let result = [];
  if (chars.length) {
    result = list.filter((keywords) => {
      return keywords.toLowerCase().includes(chars.toLowerCase());
    });
    Display(result);
  }
  
}

const Display = (result) => {
  const content = result.map((listItems) => {
    return "<li>" + listItems + "</li>";
  });
  Suggest.innerHTML = content.join('');
}
function hideSuggst(x) {
  Search.value = x.innerHTML;
  Suggest.style.display = 'none';
}
