// variables


MAIN_NEWS_API = `http://localhost:5000/api/news`;
const mainNewsOutput = document.querySelector(`.main-content-container`);

const displayNews = async () => {
    

    fetch(MAIN_NEWS_API, {
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data);

      
            data.data.forEach(item => {
                console.log(item.url);
            })
    

            mainNewsOutput.innerHTML = ``;

            data.data.forEach(article => {
        
                mainNewsOutput.innerHTML +=
                    `
                <div class="news-article">
                    <div class="article-image">
                        <img src="${article.urlToImage}" alt="${article.title}" />
                    </div>
                    <div class="main-article-text">
                        <div class="article-text-top">
                            <h5>${article.title}</h5>
                            <p>${article.description}</p>
                        </div>
                    <div class="article-text-bottom">
                        <a href="${article.url}" target="blank">Full article  <i class="fas fa-angle-double-right"></i></a>
                    </div>
                    </div>
                </div>
                `;
            });
        }

        )
        .catch(err => console.log(err));

}

displayNews();