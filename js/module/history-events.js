export const getAllHistories = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/history");
    let data = await res.json();
    return data;
}
export const getHistoryById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/history/${id}`);
    let data = await res.json();
    return data;
}