export const getAllRockets = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/rockets");
    let data = await res.json();
    return data;
}

export const getRocketById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
    let data = await res.json();
    return data;
}

export const getAllRocketEngineTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "engines": 1
                },
                "sort": {
                    "engines.thrust_sea_level": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[{engines} = maxEnginesRocket]} = await res.json();
    return engines.thrust_sea_level;
}

export const getRocketMassTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "mass": 1
                },
                "sort":{
                    "mass.kg": "desc"
                },
                "limit": 1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{mass} = maxMassRocket]} = await res.json();
    return mass;
}