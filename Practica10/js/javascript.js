 /*
Forma mas larga
fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        
    });
*/


function getInfo() {
    let charId = document.getElementById("charCapture").value
    //let url = 'https://rickandmortyapi.com/api/character/' + charId
    let url = `https://rickandmortyapi.com/api/character/${charId}`

    console.log(charId)
    console.log(url)
    // Forma experto
    fetch(url)
        // Le da formato a la informacion de la API
        .then(res => res.json())
        // Procesar los datos
        .then( data => {

            console.log(data)
            let html = ` <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="${data.image}" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"> 
                                            ${data.name}
                                        </h5>
                                        <p class="card-text">
                                            ${data.gender}
                                        </p>
                                        <p class="card-text">
                                            <small class="text-body-secondary">
                                                ${data.species} 
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>`

            document.getElementById("charContent").innerHTML = html

        })


   

     


}




