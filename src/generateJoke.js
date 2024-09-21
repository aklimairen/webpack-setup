import axios  from "axios"


function generatJoke () {
   const config= {
    headers: {
        Accept: 'application/json'
    }
   }

   axios.get("https://icanhazdadjoke.com", config).then(res => {
    document.getElementById("joke").innerHTML = res.data.joke
   })
}

export default generatJoke 