export const getAllStarlinks = async() =>{
    let res = await fetch("https://api.spacexdata.com/v4/starlink");
    let data = await res.json();
    return data;
}

export const getAllStarlinkById = async(id) =>{
    let res = await fetch(`https://api.spacexdata.com/v4/starlink/${id}`);
    let data = await res.json();
    return data;
}