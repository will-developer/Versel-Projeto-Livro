var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Categoria;
(function (Categoria) {
    Categoria["TODOS"] = "Todos";
    Categoria["SCIFI"] = "Sci-fi";
    Categoria["ROMANCE"] = "Romance";
    Categoria["ACAO"] = "A\u00E7\u00E3o";
    Categoria["COMEDIA"] = "Com\u00E9dia";
    Categoria["TECNOLOGIA"] = "Tecnologia";
})(Categoria || (Categoria = {}));
var books = [
    {
        id: 1,
        titulo: 'O Guia do Mochileiro das Galáxias',
        autor: 'Douglas Adams',
        categoria: Categoria.SCIFI,
        preco: 35.9,
        capa: 'https://m.media-amazon.com/images/I/81MandRgHRL._UF1000,1000_QL80_.jpg',
        descricao: 'A saga de Arthur Dent, um humano que escapa da destruição da Terra com seu amigo Ford Prefect, um alienígena disfarçado.',
    },
    {
        id: 2,
        titulo: 'Orgulho e Preconceito',
        autor: 'Jane Austen',
        categoria: Categoria.ROMANCE,
        preco: 29.99,
        capa: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/14/20028635.jpg',
        descricao: 'A história de Elizabeth Bennet e suas irmãs enquanto navegam pela sociedade inglesa do século XIX em busca do amor e da felicidade.',
    },
    {
        id: 3,
        titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
        autor: 'J.R.R. Tolkien',
        categoria: Categoria.ACAO,
        preco: 59.9,
        capa: 'https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg',
        descricao: 'A jornada épica de Frodo Bolseiro para destruir o Um Anel e salvar a Terra-média das garras do Lorde das Trevas, Sauron.',
    },
    {
        id: 4,
        titulo: 'A Batalha do Apocalipse',
        autor: 'Eduardo Spohr',
        categoria: Categoria.ACAO,
        preco: 45.5,
        capa: 'https://m.media-amazon.com/images/I/81IOICDo00L.jpg',
        descricao: 'Uma guerra entre anjos e demônios que abala os alicerces do céu e do inferno, com o destino do mundo em jogo.',
    },
    {
        id: 5,
        titulo: 'O Homem de Giz',
        autor: 'C.J. Tudor',
        categoria: Categoria.COMEDIA,
        preco: 38.7,
        capa: 'https://m.media-amazon.com/images/I/71azIDnPN8L._UF1000,1000_QL80_.jpg',
        descricao: 'Um suspense psicológico sobre um grupo de amigos que se reencontra após um evento traumático na infância, desencadeado por misteriosos desenhos de giz.',
    },
    {
        id: 6,
        titulo: 'Código Limpo: Habilidades Práticas do Agile Software',
        autor: 'Robert C. Martin',
        categoria: Categoria.TECNOLOGIA,
        preco: 89.9,
        capa: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        descricao: 'Um guia essencial para desenvolvedores que desejam escrever um código mais legível, manutenível e eficiente.',
    },
];
var divBook = document.getElementById('fatherCard');
var renderCards = function (booksFilter) {
    //fiz isso pra evitar possivel erro de compilação apontado pelo typescript
    if (!divBook)
        return;
    divBook.innerHTML = '';
    if (booksFilter.length === 0) {
        divBook.innerHTML =
            '<p class="text-center text-danger w-100">Nenhum item adicionado</p>';
        return;
    }
    booksFilter.forEach(function (item) {
        var createdDiv = document.createElement('div');
        createdDiv.className = "col";
        createdDiv.innerHTML = "\n    <div class=\"card h-100 shadow text-center\">\n        <img src=\"".concat(item.capa, "\" class=\"card-img-top img-contain\" alt=\"...\" height=\"300px\">\n        <div class=\"card-body\">\n            <h3 class=\"card-title\">").concat(item.titulo, "</h3>\n            <p class=\"card-text\">").concat(item.descricao, "</p>\n        </div>\n        <div class=\"card-body py-0 pb-2\">\n            <p class=\"card-text\">Autor: ").concat(item.autor, "</p>\n            <p  class=\"card-text\">Categoria: ").concat(item.categoria, "</p>\n        </div>\n        <div class=\"card-footer d-flex justify-content-between\">\n            <button id=\"editIcon\" type=\"button\" class=\"btn btn-secondary btn-sm\" onclick=\"editBook(").concat(item.id, ")\">\u270F\uFE0F</button>\n            <a class=\"btn btn-primary\">Valor: R$ ").concat(item.preco, " </a>\n            <button id=\"deleteIcon\" type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\"deleteBook(").concat(item.id, ")\">\uD83D\uDDD1\uFE0F</button>\n        </div>\n    </div>\n    ");
        if (divBook)
            divBook.appendChild(createdDiv);
    });
};
renderCards(books);
var addBook = function (e) {
    e.preventDefault();
    //no ts, diferente do js, ele faz a compilação antes da execução, portanto é necessário adicionar os AS para informar que tipo é o elemento que está vindo, o JS não se importaria com isso
    var titulo = document.getElementById('inputLivro')
        .value;
    var autor = document.getElementById('inputAutor')
        .value;
    var categoria = document.getElementById('inputCategoria').value;
    var preco = parseFloat(document.getElementById('inputPreco').value);
    var capa = document.getElementById('inputUrl').value;
    var descricao = document.getElementById('inputDescricao').value;
    var newBook = {
        titulo: titulo,
        autor: autor,
        categoria: categoria,
        preco: preco,
        capa: capa,
        descricao: descricao,
    };
    books.push(__assign({ id: books.length + 1 }, newBook));
    renderCards(books);
    divBook.scrollIntoView({ behavior: 'smooth' });
    form.reset();
};
var form = document.getElementById('form');
form.addEventListener('submit', addBook);
var editBook = function (id) {
    var bookToEdit = books.find(function (book) { return book.id === id; });
    if (!bookToEdit)
        return;
    window.scrollTo({ top: 20, behavior: 'smooth' });
    document.getElementById('inputLivro').value =
        bookToEdit.titulo;
    document.getElementById('inputAutor').value =
        bookToEdit.autor;
    document.getElementById('inputCategoria').value =
        bookToEdit.categoria;
    document.getElementById('inputPreco').value =
        bookToEdit.preco.toString();
    document.getElementById('inputUrl').value =
        bookToEdit.capa;
    document.getElementById('inputDescricao').value =
        bookToEdit.descricao;
    form.removeEventListener('submit', addBook);
    var updateBook = function (e) {
        e.preventDefault();
        var bookIndex = books.findIndex(function (book) { return book.id === id; });
        if (bookIndex === -1)
            return;
        books[bookIndex].titulo = document.getElementById('inputLivro').value;
        books[bookIndex].autor = document.getElementById('inputAutor').value;
        books[bookIndex].categoria = document.getElementById('inputCategoria').value;
        books[bookIndex].preco = parseFloat(document.getElementById('inputPreco').value);
        books[bookIndex].capa = document.getElementById('inputUrl').value;
        books[bookIndex].descricao = document.getElementById('inputDescricao').value;
        renderCards(books);
        form.reset();
        form.removeEventListener('submit', updateBook);
        form.addEventListener('submit', addBook);
        divBook.scrollIntoView({ behavior: 'smooth' });
    };
    form.addEventListener('submit', updateBook);
};
var deleteBook = function (id) {
    var bookIndex = books.findIndex(function (book) { return book.id === id; });
    if (bookIndex > -1) {
        books.splice(bookIndex, 1);
        renderCards(books);
    }
};
var filterCategory = function (category) {
    if (category === Categoria.TODOS) {
        renderCards(books);
    }
    else {
        var filteredBooks = books.filter(function (item) { return item.categoria === category; });
        renderCards(filteredBooks);
    }
};
