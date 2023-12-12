const URL= "https://any-api.com/nba_com/nba_com/docs/_allstarballotpredictor"

async function getData(URL){
    try {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
    }
}