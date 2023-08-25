import axios from 'axios';

export default async function  swapiRequest(Link) {

  await axios.get(Link)
  .then(response => {
        const characters = response.data.results;
        // console.log()
        console.log(characters)
    })
    .catch(error => {
      console.log("lol")
    });

  return characters
}
