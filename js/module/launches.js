export const getAllLaunches = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/launches");
    let data = await res.json();
    return data;
}
export const getLaunchById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
    let data = await res.json();
    return data;
}

export const getLaunchLastest = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/launches/latest");
    let data = await res.json();
    return data;
}

export const getLaunchNext = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/launches/next");
    let data = await res.json();
    return data;
}

export const getLaunchPast = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/launches/past");
    let data = await res.json();
    return data;
}