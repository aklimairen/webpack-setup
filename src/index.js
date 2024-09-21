import generatJoke  from "./generateJoke"
import './styles/main.scss'
import target from "./assets/target.jpg"

const targetImg = document.getElementById('targetImg');
targetImg.src = target

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generatJoke)
generatJoke()