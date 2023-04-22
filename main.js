
const bg_color = {
  grass: '#8BD369',
  fire: '#FF603F',
  water: '#3399FF',
  bug: '#AABB22',
  normal: '#AAAA99',
  flying: '#9AA8FA',
  poison: '#B76EA4',
  electric: '#FFD34E',
  ground: '#E2C56A',
  fairy: '#F1A8EC',
  psychic: '#FF6EA4',
  fighting: '#C56E5C',
  rock: '#C5B679',
  dragon: '#7766EE',
  ice: '#66CCFF',
}





const search=document.querySelector(".search")
const searchBtn=document.querySelector(".searchBtn")
const searchInput=document.querySelector(".searchInput")
const pokecontainer=document.querySelector(".poke-container")


const pokemon_count = 151



function toggle(){
search.classList.toggle("active")
}

searchBtn.addEventListener("click",toggle)

searchInput.addEventListener("input",(e)=>{
  const pokeNames=document.querySelectorAll(".poke-name")
   // console.log(pokemonn.textContent)
   const inputValue=searchInput.value.toLowerCase()
  
  //pokeName.textContent
  
  
  pokeNames.forEach((pokemonn)=>{
    const pokeDivi=pokemonn.parentElement.parentElement
const pokeName=pokemonn.innerHTML.toLowerCase()
  //console.log(pokeDivi)
  if(pokeName.includes(inputValue)){
    pokeDivi.style.display="block"
  }else{
    pokeDivi.style.display="none"
  }
  })
  
  
  })

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i)
  }
}

const getPokemon=async(id)=>{
  const apiurl=`https://pokeapi.co/api/v2/pokemon/${id}`
  const res=await fetch(apiurl)
  const data= await res.json()
  createPokemon(data)
 // console.log(data)
}

const createPokemon=(pokemon)=>{
  const pokemonId = pokemon.id.toString().padStart(3, '0')
  const pokeDiv=document.createElement("div")
  pokecontainer.appendChild(pokeDiv)

  pokeDiv.classList.add("pokemon")

  const pokeType=pokemon.types[0].type.name

const pokeDivBg=bg_color[pokeType]

pokeDiv.style.backgroundColor=pokeDivBg



  const pokeDivInnerHtml=`
  
  <div class="image-container">
  <img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
    alt="Pokemon 1 image"
  />
</div>
<div class="poke-info">
  <span class="poke-id">#${pokemonId}</span>
  <h3 class="poke-name">${pokemon.name}</h3>
  <div class="small">
    <small class="poke-exp" base_experience
      ><i class="fa-solid fa-flask"></i> <span>${pokemon.base_experience}</span></small
    >
    <small class="poke-weight"
      ><i class="fa-solid fa-weight-scale"></i> <span>${pokemon.weight}</span></small
    >
  </div>
  <div class="poke-type"></d>
    <i class="fa-brands fa-uncharted"></i> <span>${pokeType}</span>
  </h5>
</div>
  `

  pokeDiv.innerHTML=pokeDivInnerHtml

}




fetchPokemons()









