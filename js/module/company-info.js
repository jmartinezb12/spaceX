export const getAllCompaniesInfo = async () => {

    let res = await fetch("https://api.spacexdata.com/v4/company");
    let data = await res.json();
    return data;
}

export const getCompanyInfoById = async (id) => {

    let res = await fetch(`https://api.spacexdata.com/v4/company/${id}`);
    let data = await res.json();
    return data;
}