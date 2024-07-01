export const getAllRoadsters = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/roadster");
    let data = await res.json();
    return data;
}
export const getRoadsterById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/roadster/${id}`);
    let data = await res.json();
    return data;
}