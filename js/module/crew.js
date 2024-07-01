export const getAllCrews = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/crew");
    let data = await res.json();
    return data;
}
export const getCrewById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`);
    let data = await res.json();
    return data;
}