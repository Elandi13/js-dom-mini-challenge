/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "Red"


/***** Deliverable 3 *****/


console.log('This is what the traveler object looks like: ', traveler)

let profile = document.querySelector(".traveler")
profile.innerHTML = `<div class="traveler">
<div id="profile">
  <img src="${traveler.photo}"
    alt="${traveler.name}">
  <h2>"${traveler.name}"</h2>
  <em>"${traveler.nickname}"</em>
</div>
<h4>Great Sightings</h4>
<ul id="animals">
</ul>
</div>`


console.log(profile)



/***** Deliverable 4 *****/

const listOfSightings = document.querySelector("ul#animals")

    traveler.animalSightings.forEach(function(sighting) {
        let thisSighting = document.createElement("li")
        thisSighting.dataset.id = sighting.id
        thisSighting.innerHTML = `<p>{animal sighting description}</p>
        <img src="${sighting.photo}" alt="${sighting.species}"/>
        <a href="${sighting.link}" target="_blank">Here's a video about the "${sighting.species}" species!</a>
      </li>`
      listOfSightings.append
      (thisSighting)
    }) 


/***** Deliverable 5 *****/

listOfSightings.querySelector("[data-id='3']").remove()