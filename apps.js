let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";
let h3 = document.querySelector("h3");
let p = document.querySelector("p");


btn.addEventListener("click" , async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src" , link);

    console.log(link);
p.innerText ="Dog Breed Name ";
    h3.innerText = link;
    let hidden = link.slice(30 , 46)
    h3.innerText = hidden;
    
   
});


async function getImage() {
    try {
        let res = await axios.get(url);
       
console.log(res);
        return res.data.message;

    } catch(e) {
        console.log("error -" , e);
        return "/";
    }
}