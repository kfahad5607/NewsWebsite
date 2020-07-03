// 67d14271061343acbb233b70763fa4fe
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=67d14271061343acbb233b70763fa4fe', true);

xhr.onload = function () {
    if (this.status == 200) {
        let collectedNews = JSON.parse(this.responseText);
        console.log(collectedNews)
        let newsAccordion = document.getElementById('newsAccordion');
        console.log(newsAccordion)
        let html = "";
        collectedNews['articles'].forEach(function (element, index) {
            html += `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsAccordion.innerHTML = html;


        });
    }
}

xhr.send();
