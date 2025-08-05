enum Categoria {
  TODOS = 'Todos',
  SCIFI = 'Sci-fi',
  ROMANCE = 'Romance',
  ACAO = 'Ação',
  COMEDIA = 'Comédia',
  TECNOLOGIA = 'Tecnologia',
}

interface Livros {
  id: number;
  titulo: string;
  autor: string;
  categoria: Categoria;
  preco: number;
  capa: string;
  descricao: string;
}

const books: Livros[] = [
  {
    id: 1,
    titulo: 'O Guia do Mochileiro das Galáxias',
    autor: 'Douglas Adams',
    categoria: Categoria.SCIFI,
    preco: 35.9,
    capa: 'https://m.media-amazon.com/images/I/81MandRgHRL._UF1000,1000_QL80_.jpg',
    descricao:
      'A saga de Arthur Dent, um humano que escapa da destruição da Terra com seu amigo Ford Prefect, um alienígena disfarçado.',
  },
  {
    id: 2,
    titulo: 'Orgulho e Preconceito',
    autor: 'Jane Austen',
    categoria: Categoria.ROMANCE,
    preco: 29.99,
    capa: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/14/20028635.jpg',
    descricao:
      'A história de Elizabeth Bennet e suas irmãs enquanto navegam pela sociedade inglesa do século XIX em busca do amor e da felicidade.',
  },
  {
    id: 3,
    titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
    autor: 'J.R.R. Tolkien',
    categoria: Categoria.ACAO,
    preco: 59.9,
    capa: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg',
    descricao:
      'A jornada épica de Frodo Bolseiro para destruir o Um Anel e salvar a Terra-média das garras do Lorde das Trevas, Sauron.',
  },
  {
    id: 4,
    titulo: 'A Batalha do Apocalipse',
    autor: 'Eduardo Spohr',
    categoria: Categoria.ACAO,
    preco: 45.5,
    capa: 'https://m.media-amazon.com/images/I/81IOICDo00L.jpg',
    descricao:
      'Uma guerra entre anjos e demônios que abala os alicerces do céu e do inferno, com o destino do mundo em jogo.',
  },
  {
    id: 5,
    titulo: 'O Homem de Giz',
    autor: 'C.J. Tudor',
    categoria: Categoria.COMEDIA,
    preco: 38.7,
    capa: 'https://m.media-amazon.com/images/I/71azIDnPN8L._UF1000,1000_QL80_.jpg',
    descricao:
      'Um suspense psicológico sobre um grupo de amigos que se reencontra após um evento traumático na infância, desencadeado por misteriosos desenhos de giz.',
  },
  {
    id: 6,
    titulo: 'Código Limpo: Habilidades Práticas do Agile Software',
    autor: 'Robert C. Martin',
    categoria: Categoria.TECNOLOGIA,
    preco: 89.9,
    capa: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    descricao:
      'Um guia essencial para desenvolvedores que desejam escrever um código mais legível, manutenível e eficiente.',
  },
];

const divBook = document.getElementById('fatherCard');
const renderCards = (booksFilter: Livros[]): void => {
  //fiz isso pra evitar possivel erro de compilação apontado pelo typescript
  if (!divBook) return;

  divBook.innerHTML = '';

  if (booksFilter.length === 0) {
    divBook.innerHTML =
      '<p class="text-center text-danger w-100">Nenhum item adicionado</p>';
    return;
  }

  booksFilter.forEach((item) => {
    const createdDiv = document.createElement('div');
    createdDiv.className = `col`;

    createdDiv.innerHTML = `
    <div class="card h-100 shadow text-center">
        <img src="${item.capa}" class="card-img-top img-contain" alt="..." height="300px">
        <div class="card-body">
            <h3 class="card-title">${item.titulo}</h3>
            <p class="card-text">${item.descricao}</p>
        </div>
        <div class="card-body py-0 pb-2">
            <p class="card-text">Autor: ${item.autor}</p>
            <p  class="card-text">Categoria: ${item.categoria}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <button id="editIcon" type="button" class="btn btn-secondary btn-sm" onclick="editBook(${item.id})">✏️</button>
            <a class="btn btn-primary">Valor: R$ ${item.preco} </a>
            <button id="deleteIcon" type="button" class="btn btn-danger btn-sm" onclick="deleteBook(${item.id})">🗑️</button>
        </div>
    </div>
    `;

    if (divBook) divBook.appendChild(createdDiv);
  });
};

renderCards(books);

const addBook = (e: Event): void => {
  e.preventDefault();

  //no ts, diferente do js, ele faz a compilação antes da execução, portanto é necessário adicionar os AS para informar que tipo é o elemento que está vindo, o JS não se importaria com isso
  const titulo = (document.getElementById('inputLivro') as HTMLInputElement)
    .value;
  const autor = (document.getElementById('inputAutor') as HTMLInputElement)
    .value;
  const categoria = (
    document.getElementById('inputCategoria') as HTMLSelectElement
  ).value as Categoria;
  const preco = parseFloat(
    (document.getElementById('inputPreco') as HTMLInputElement).value,
  );
  const capa = (document.getElementById('inputUrl') as HTMLInputElement).value;
  const descricao = (
    document.getElementById('inputDescricao') as HTMLTextAreaElement
  ).value;

  const newBook = {
    titulo,
    autor,
    categoria,
    preco,
    capa,
    descricao,
  };

  books.push({
    id: books.length + 1,
    ...newBook,
  });
  renderCards(books);

  divBook.scrollIntoView({ behavior: 'smooth' });

  form.reset();
};

const form = document.getElementById('form') as HTMLFormElement;
form.addEventListener('submit', addBook);

const editBook = (id: number): void => {
  const bookToEdit = books.find((book) => book.id === id);
  if (!bookToEdit) return;

  window.scrollTo({ top: 20, behavior: 'smooth' });

  (document.getElementById('inputLivro') as HTMLInputElement).value =
    bookToEdit.titulo;
  (document.getElementById('inputAutor') as HTMLInputElement).value =
    bookToEdit.autor;
  (document.getElementById('inputCategoria') as HTMLSelectElement).value =
    bookToEdit.categoria;
  (document.getElementById('inputPreco') as HTMLInputElement).value =
    bookToEdit.preco.toString();
  (document.getElementById('inputUrl') as HTMLInputElement).value =
    bookToEdit.capa;
  (document.getElementById('inputDescricao') as HTMLTextAreaElement).value =
    bookToEdit.descricao;

  form.removeEventListener('submit', addBook);

  const updateBook = (e: Event) => {
    e.preventDefault();

    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) return;

    books[bookIndex].titulo = (
      document.getElementById('inputLivro') as HTMLInputElement
    ).value;
    books[bookIndex].autor = (
      document.getElementById('inputAutor') as HTMLInputElement
    ).value;
    books[bookIndex].categoria = (
      document.getElementById('inputCategoria') as HTMLSelectElement
    ).value as Categoria;
    books[bookIndex].preco = parseFloat(
      (document.getElementById('inputPreco') as HTMLInputElement).value,
    );
    books[bookIndex].capa = (
      document.getElementById('inputUrl') as HTMLInputElement
    ).value;
    books[bookIndex].descricao = (
      document.getElementById('inputDescricao') as HTMLTextAreaElement
    ).value;

    renderCards(books);

    form.reset();

    form.removeEventListener('submit', updateBook);
    form.addEventListener('submit', addBook);
    divBook.scrollIntoView({ behavior: 'smooth' });
  };

  form.addEventListener('submit', updateBook);
};

const deleteBook = (id: number): void => {
  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex > -1) {
    books.splice(bookIndex, 1);
    renderCards(books);
  }
};

const filterCategory = (category: Categoria): void => {
  if (category === Categoria.TODOS) {
    renderCards(books);
  } else {
    const filteredBooks = books.filter((item) => item.categoria === category);
    renderCards(filteredBooks);
  }
};
