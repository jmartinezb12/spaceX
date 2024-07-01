export const getAllCores = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/cores");
    let data = await res.json();
    return data;
}
export const getCoreById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/cores/${id}`);
    let data = await res.json();
    return data;
}