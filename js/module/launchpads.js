export const getAllLaunchpads = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/launchpads");
    let data = await res.json();
    return data;
}
export const getLaunchpadById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/launchpads/${id}`);
    let data = await res.json();
    return data;
}