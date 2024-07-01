export const getAllLandingPads = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/landpads");
    let data = await res.json();
    return data;
}
export const getLandingPadById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/landpads/${id}`);
    let data = await res.json();
    return data;
}