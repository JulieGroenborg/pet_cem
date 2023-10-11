import { getPets, deletePet, updatePet, addPet } from "./utils/petsdb.js";

async function showPets() {
  const pets = await getPets();
  console.log(pets);
  console.log(pets.length, "dyr i databasen");
  document.querySelector(".pets").innerHTML = "";

  pets.forEach((pet) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    //ændre indhold
    copy.querySelector(".p1").textContent = pet.species;
    copy.querySelector(".p2").textContent = pet.name;
    if (pet.isAlive === true) {
      copy.querySelector(".p3").textContent = "Yes";
    } else if (pet.isAlive === false) {
      copy.querySelector(".p3").textContent = "Nej";
    }
    copy.querySelector(".p4").textContent = pet.dob;
    copy.querySelector(".p5").textContent = pet.activityLevel;
    copy.querySelector(".p6").textContent = pet.traits;
    copy.querySelector(".p7").textContent = pet.image;
    copy.querySelector(".p8").textContent = pet.id;
    copy.querySelector(".p9").textContent = pet.race;

    const deleteButton = copy.querySelector("button[data-action='delete']");
    deleteButton.dataset.id = pet.id;
    const updateButton = copy.querySelector("button[data-action='update']");
    updateButton.dataset.id = pet.id;

    deleteButton.addEventListener("click", async (e) => {
      await deletePet(pet.id);
      showPets();
    });
    updateButton.addEventListener("click", async (e) => {
      console.log(pet.id, "skal opdateres");
      await updatePet(pet.id);
      showPets();
    });
    document.querySelector(".pets").appendChild(copy);
  });
}
showPets();

//----------Working on range-bubble---------------------------
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach((wrap) => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
