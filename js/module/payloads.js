export const getAllPayloads = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/ships");
    let data = await res.json();
    return data;
}
export const getPayloadById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/ships/${id}`);
    let data = await res.json();
    return data;
}