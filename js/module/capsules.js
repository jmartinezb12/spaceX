export const getAllCapsules = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/capsules");
    let data = await res.json();
    return data;
}

export const getCapsuleById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`);
    let data = await res.json();
    return data;
}