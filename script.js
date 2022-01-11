const form = document.getElementById('form')
const form = document.getElementById('search')
const form = document.getElementById('result')

const apiURL = 'http://api.lyrics.ovh';

//adding evet listiner in form

form.addEventListener('submit', e=>{
e.preventDefault();
searchvalue =search.nodeValue.trim();

//checking search value is empty or not

if(!searchvalue){
    alert('There is nothing to search')
}
else{
    searchSong(searchvalue)
    alert(searchvalue)
}
})
 async function searchSong(searchvalue){
const searchResult = await fetch('${apiURL}'/suggest/$(searchvalue));
const data = await searchResult.json();
showData(data)
}
function showData(data){
    Result.innerHTML =
    <ul class="song-list">
    ${data.data.map(song=> <li> 
                            <div>
                        <strong>
                            ${song.artist.name}
                        </strong> -${song.title}
                            </div>
                            <span data-artist="${song.artist.name}" data-songtitle="${song.title}">
                          get lyrics
                            </span>
                            </li>

                    ).join('')

      }
                        </ul>
                           
                        
  }
  result.addEventListener('click', e=>{
      const clickedElement = e.target;

      if(clickedElement.tagName === 'SPAN'){
          const artist = clickedElement.getAttribute('data-artist');
          const songTitle = clickedElement.getAttribute('data-songtitle');
          getLyrics(artist,songTitle)
      }
  }
  )
  async function getLyrics(artist,songTitle){
      const res = await fetch('${apiURL}/vl/${artist}/${songTitle}')
      const data = await res.json();
      const lyrics = data.lyrics.replace(/{\r\n\r\n}/g, '<br>')
      result.innerHTML= <h2> <strong> ${artist }
      </strong> -${songTitle}
       </h2>
  }
