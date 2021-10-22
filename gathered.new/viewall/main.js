const index = {
  'girl': 'img-gallery/img-01.jpg',
  'boy': 'img-gallery/img-02.jpg',
  'smile': 'img-gallery/img-03.jpg'
}

const searchbox = document.getElementById('searchbox');
const results = document.getElementById('results');

// In the HTML, oninput="search()" ensures this function is called
// every time a user types into the searchbox
function search(){
  clearContents(results); // remove previous results
  const searchTerm = searchbox.value.toLowerCase();
  
  // search the index for matching terms
  for(const key in index){
    if(key.includes(searchTerm) && searchTerm != ''){
      const img = document.createElement('img');
      img.src = index[key];
      results.appendChild(img);
    }
  }
}

function clearContents(elem){
  while(elem.firstChild){
    elem.removeChild(elem.firstChild);
  }
}