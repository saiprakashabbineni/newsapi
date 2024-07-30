const apikey = '20ef31c5dfb34bb78f2925f262c6b693';


const blogContainer = document.getElementById("blog-container")
const searchField = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")

searchButton.addEventListener("click",async() =>{
    
    const query = searchField.value.trim()
    if (query !== "")
    try{
const sai = await fetchNewsQuery(query)
displayBox(sai)
}catch(error){
    console.log("error fetching ",error)
}
})

async function fetchNewsQuery(query) {
    try{
        const apiUrl =`
        https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apikey}` 
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data);
return data.articles ;         
    }catch(error){
        console.error("Error fetching data",error)
        return[]

    }
}



async function fetchRandomNews(){
    try{
        const apiUrl =`https://newsapi.org/v2/top-headlines?sources=techcrunch&apikey=${apikey}` 
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data);
return data.articles ;         
    }catch(error){
        console.error("Error fetching data",error)
        return[]

    }
}
function displayBox(articles) {
    blogContainer.innerHTML = "";
    
    
    if (Array.isArray(articles) && articles.length > 0) {
        articles.forEach((article) => {
            const blogCard = document.createElement("div");
            blogCard.classList.add("blog-card");

            const img = document.createElement("img");
            img.src = article.urlToImage;
            img.alt = article.title;
           
            const title = document.createElement("h2");
            const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "...." : article.title;
            title.textContent = truncatedTitle;

            const description =document.createElement("p")
            const truncatedDescription = article.description.length > 120 ? article.description.slice(0, 120) + "...." : article.description;
            description.textContent = truncatedDescription;


            

            blogCard.appendChild(img);
            blogCard.appendChild(title);
            blogCard.appendChild(description);
            blogCard.addEventListener("click",()=>{
                window.open(article.url,"_blank")
            })
            blogContainer.appendChild(blogCard);
        });
    } else {
        // Handle case where articles is not an array or empty
        blogContainer.textContent = "No articles found.";
    }
}


(async ()=>{
    try{
        const articles = await fetchRandomNews()
      displayBox(articles)
    }catch(error){
        console.error("Error fetching news", error);
        return[]
    }
})()