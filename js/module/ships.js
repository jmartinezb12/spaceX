export const getAllShips = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/ships");
    let data = await res.json();
    return data;
}
export const getShipById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/ships/${id}`);
    let data = await res.json();
    return data;
}