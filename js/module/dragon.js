export const getAllDragons = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/dragon");
    let data = await res.json();
    return data;
}
export const getDragonById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/dragon/${id}`);
    let data = await res.json();
    return data;
}