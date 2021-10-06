const apiURL = "https://imdb-lab.herokuapp.com/api/v1/directors";

const getData = async () => {
    const fetchData = await fetch(apiURL)
    const data = await fetchData.json()
    return data

}

export default getData