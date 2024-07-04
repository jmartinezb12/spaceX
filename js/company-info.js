import { getAllCompaniesInfo } from "./module/company-info.js";

document.addEventListener("DOMContentLoaded",  async()=>{
    const params = new URLSearchParams(location.search);
    let receivedAllCompaniesInfo = await getAllCompaniesInfo();
    console.log(receivedAllCompaniesInfo);
});