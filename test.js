
//const are = ['gustavo', 'manoela', 'mariana']
const are = []


const lista =  are.map(function lista(nome) {
    document.getElementById("lista").innerHTML += `<li>${nome}</li>`    
})

function add(){
    const valor = adicionar()
    busca(valor)
}

//document.getElementById('item').addEventListener('blur',(event)=>{
//    const valor = adicionar()
//    busca(valor)
//})

document.getElementById('item').addEventListener('keypress',(e)=>{
    if(e.which == 13){
        const valor = adicionar()
        busca(valor)
    }
},false)

function adicionar(){
    const novo_item = document.getElementById("item").value
    if (novo_item != '' && novo_item.length >= 3){
        document.getElementById("lista").innerHTML += `<li>${novo_item}</li>`
        
    }
    return novo_item
}

function busca(novo_item){
    //const novo_item = document.getElementById("item").value

    //console.log(document.getElementById("item"))

    console.log(`http://www.omdbapi.com/?apikey=6b325277&s='${novo_item}'`)
    $.ajax({
        url: `http://www.omdbapi.com/?apikey=6b325277&s='${novo_item}'`,

        contentType: "application/json",
        dataType : "jsonp",
        success: function(result){
            limpar_tela()
            result.Search.map(function(dados){
                mostrar_dados_tela(dados)
            });
        
        },
        error: function(result){
            console.log(result);
        }
    })
    
}

teste = [
{ Title: "Spider-Man", Year: "2002", imdbID: "tt0145487", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg" },
{ Title: "The Amazing Spider-Man", Year: "2012", imdbID: "tt0948470", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg" }
]
filmes = []


//// tabela no html

function mostrar_dados_tela(dados){
    
        document.getElementById("dados").innerHTML += 
        `
        <tr>
            <td>${dados.Title}</td>
            <td>${dados.Year}</td>
            <td>${dados.imdbID}</td>
            <td>${dados.Type}</td>
            <!--
            <td>${dados.Poster}</td>
            -->
            <td>
            
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${dados.imdbID}">
                    Ver Pôster Do Filme
                </button>
            </td>
            
        </tr>
        `
        document.getElementById("poster").innerHTML += 
        `
        <!-- Modal -->
        <div class="modal fade" id="${dados.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Pôster Do Filme</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <img src="${dados.Poster}">
            </div>
            <div class="modal-footer">
                
            </div>
            </div>
        </div>
        </div>     
        `
    
    
}

function limpar_tela(){
    document.getElementById("dados").innerHTML = ''
    document.getElementById("poster").innerHTML = ''
}

//detalhes
//http://www.omdbapi.com/?i=tt0211915&apikey=6b325277