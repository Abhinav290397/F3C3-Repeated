async function getInfo(){
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
    const Data = await response.json();
    return Data;
}
getInfo().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
const Table = document.getElementById("table");

const info =  await getInfo();
info.forEach((ele) => {
   const Id = ele.id;
});
