export const getAllCapsules = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
    let data = await res.json();
    return data;
}

export const getCapsuleById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`);
    let data = await res.json();
    return data;
}