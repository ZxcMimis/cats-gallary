const cats = [
    {
        breed: "сиамский",
        photo: " https://petsi.net/images/catbreed/big/siamskaya.jpg",
    },

    {
        breed: "британский",
        photo: "https://cdn.royalcanin-weshare-online.io/ylb-oW4BBKJuub5qWV9b/v2/british-shorthair-behaviour-and-care?w=960&fm=jpg&auto=format%2Ccompress"
    },

    {
        breed: "Экзотическая короткошёрстная кошка",
        photo: "photo/загружено.webp"
    },

    {
        breed: "Персидская кошка",
        photo: "https://focus.ua/static/storage/thumbs/920x465/3/d6/cff41173-a8f03be7eb346b134d00d83493e74d63.webp?v=9766_1",
    },

    {
        breed: "Азійська кішка",
        photo: "https://www.purina.ua/sites/default/files/styles/ttt_image_930/public/2024-01/sitesdefaultfilesstylessquare_medium_440x440public2022-06Asian-Cat-Breed.webp?itok=SnnLMgNa"
    },
    
];

// const listElement = document.createElement("ul");
 
// cats.forEach(({ breed, photo }) => {
//     listElement.insertAdjacentHTML("beforeend", `<li>
//         <article>
//         <h2> ${cats.breed}</h2>
//         <img src="${cats.photo}" alt="${cats.breed}">
//         </article>
//         </li>`)
// })




// document.querySelector("body").prepend(listElement);

const listElement = document.createElement("ul");
const catsLayout = cats.map(({ breed, photo }) => {
    listElement.insertAdjacentHTML("beforeend", `<li>
        <article>
        <h2> ${breed}</h2>
        <img src="${photo}" alt="${breed}">
        </article>
        </li>`)
})

const catsList = catsLayout.join("");
listElement.insertAdjacentHTML("afterbegin", catsList)

document.querySelector("body").prepend(listElement);

console.log(listElement)