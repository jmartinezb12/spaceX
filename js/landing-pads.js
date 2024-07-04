document.addEventListener("DOMContentLoaded",  async()=>{
    const params = new URLSearchParams(location.search);
    let receivedAllHistories = await getAllHistories();
    console.log(receivedAllHistories);
});