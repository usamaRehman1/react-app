const url =  "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let changeURL = url ;

    if(country){
        changeURL = `${url}/countries/${country}`
    }

    try {
        let fetch_data = await fetch(changeURL);
        let  data  = await fetch_data.json();
    
        let modifyData = { 
            confirmed : data.confirmed,
            recovered : data.recovered,
            deaths : data.deaths,
            lastUpdate : data.lastUpdate
        }
        return modifyData
    }catch (error) {
        console.log("Error=>", error)

    }
}

export const fetchDailyData = async () => {
    try{ 
        let fetch_dailyData= await fetch(`${url}/daily`)
        let dailyData = await fetch_dailyData.json();

        return dailyData
    }catch (error) {
        console.log("Error =>" , error)
    }
}

export const fetchCountries = async () => {
    try{
        let fetch_countries = await fetch(`${url}/countries`)
        let countriesData = await fetch_countries.json();

        return countriesData;

    }catch (error) {
        console.log("Error=>", error)
    }
}