const are=[],lista=are.map(function(e){document.getElementById("lista").innerHTML+=`<li>${e}</li>`});function add(){busca(adicionar())}function adicionar(){const e=document.getElementById("item").value;return""!=e&&e.length>=3&&(document.getElementById("lista").innerHTML+=`<li>${e}</li>`),e}function busca(e){console.log(`http://www.omdbapi.com/?apikey=6b325277&s='${e}'`),$.ajax({url:`https://www.omdbapi.com/?apikey=6b325277&s='${e}'`,contentType:"application/json",dataType:"jsonp",success:function(e){limpar_tela(),e.Search.map(function(e){mostrar_dados_tela(e)})},error:function(e){console.log(e)}},3e3)}function mostrar_dados_tela(e){document.getElementById("dados").innerHTML+=`\n        <tr>\n            <td>${e.Title}</td>\n            <td>${e.Year}</td>\n            <td>${e.imdbID}</td>\n            <td>${e.Type}</td>\n            \x3c!--\n            <td>${e.Poster}</td>\n            --\x3e\n            <td>\n            \n                \x3c!-- Button trigger modal --\x3e\n                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${e.imdbID}">\n                    Ver Pôster Do Filme\n                </button>\n            </td>\n            \n        </tr>\n        `,document.getElementById("poster").innerHTML+=`\n        \x3c!-- Modal --\x3e\n        <div class="modal fade" id="${e.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n        <div class="modal-dialog" role="document">\n            <div class="modal-content">\n            <div class="modal-header">\n                <h5 class="modal-title" id="exampleModalLabel">Pôster Do Filme</h5>\n                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">\n                <span aria-hidden="true">&times;</span>\n                </button>\n            </div>\n            <div class="modal-body">\n                <img src="${e.Poster}">\n            </div>\n            <div class="modal-footer">\n                \n            </div>\n            </div>\n        </div>\n        </div>     \n        `}function limpar_tela(){document.getElementById("dados").innerHTML="",document.getElementById("poster").innerHTML=""}document.getElementById("item").addEventListener("keypress",e=>{if(13==e.which){busca(adicionar())}},!1),teste=[{Title:"Spider-Man",Year:"2002",imdbID:"tt0145487",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"},{Title:"The Amazing Spider-Man",Year:"2012",imdbID:"tt0948470",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"}],filmes=[];const are=[],lista=are.map(function(e){document.getElementById("lista").innerHTML+=`<li>${e}</li>`});function add(){busca(adicionar())}function adicionar(){const e=document.getElementById("item").value;return""!=e&&e.length>=3&&(document.getElementById("lista").innerHTML+=`<li>${e}</li>`),e}function busca(e){console.log(`http://www.omdbapi.com/?apikey=6b325277&s='${e}'`),$.ajax({url:`https://www.omdbapi.com/?apikey=6b325277&s='${e}'`,contentType:"application/json",dataType:"jsonp",success:function(e){limpar_tela(),e.Search.map(function(e){mostrar_dados_tela(e)})},error:function(e){console.log(e)}},3e3)}function mostrar_dados_tela(e){document.getElementById("dados").innerHTML+=`\n        <tr>\n            <td>${e.Title}</td>\n            <td>${e.Year}</td>\n            <td>${e.imdbID}</td>\n            <td>${e.Type}</td>\n            \x3c!--\n            <td>${e.Poster}</td>\n            --\x3e\n            <td>\n            \n                \x3c!-- Button trigger modal --\x3e\n                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${e.imdbID}">\n                    Ver Pôster Do Filme\n                </button>\n            </td>\n            \n        </tr>\n        `,document.getElementById("poster").innerHTML+=`\n        \x3c!-- Modal --\x3e\n        <div class="modal fade" id="${e.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n        <div class="modal-dialog" role="document">\n            <div class="modal-content">\n            <div class="modal-header">\n                <h5 class="modal-title" id="exampleModalLabel">Pôster Do Filme</h5>\n                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">\n                <span aria-hidden="true">&times;</span>\n                </button>\n            </div>\n            <div class="modal-body">\n                <img src="${e.Poster}">\n            </div>\n            <div class="modal-footer">\n                \n            </div>\n            </div>\n        </div>\n        </div>     \n        `}function limpar_tela(){document.getElementById("dados").innerHTML="",document.getElementById("poster").innerHTML=""}document.getElementById("item").addEventListener("keypress",e=>{if(13==e.which){busca(adicionar())}},!1),teste=[{Title:"Spider-Man",Year:"2002",imdbID:"tt0145487",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"},{Title:"The Amazing Spider-Man",Year:"2012",imdbID:"tt0948470",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"}],filmes=[];