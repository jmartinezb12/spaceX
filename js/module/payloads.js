export const getAllPayloads = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/payloads");
    let data = await res.json();
    return data;
}
export const getPayloadById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/payloads/${id}`);
    let data = await res.json();
    return data;
}