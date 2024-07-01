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