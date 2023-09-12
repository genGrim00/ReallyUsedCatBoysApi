const button = document.querySelector(".button");
const imgContainer = document.querySelector(".imagecontainer");
const image = document.querySelector(".image");
const username = document.querySelector(".container h2");

const url = "https://catboys.com/api/img";

async function getImage() {

  try {
    button.disabled = true;
    button.innerText = "Loading...";
    username.innerText = "updating...";
    image.src = "Spinner.svg";
    const response = await fetch(url);
    const data = await response.json();
    button.disabled = false;
    button.innerText = "Get Anime Pic";
    imgContainer.style.display = "block";
    username.style.display = 'block';
    image.src = `${data.url}`
    username.innerText = `${data.artist}`
    } catch (error) {
    console.log(error)
    button.disabled = false;
    button.innerText = "Get Anime Pic";
    username.innerText = "An error occured, please try again later.";
  }
};

button.addEventListener("click" ,() =>{
 getImage();
});