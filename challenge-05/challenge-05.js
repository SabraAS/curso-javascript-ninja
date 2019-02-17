/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var qualquer = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 

function returnA(array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// 

returnA(qualquer) [1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// 


function myFunction(array, number) {
  return array[number];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

var array2 = [1, "string", true, 8.5, "hola"];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// 

myFunction(array2, 0)
myFunction(array2, 1)
myFunction(array2, 2)
myFunction(array2, 3)
myFunction(array2, 4)


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function book(nomedolivro) {
  var x= {
    "Hola": {
			quantidadePaginas: 488,
			autor: "John",
			editora: "Eu"
    },
    "Ola": {
			quantidadePaginas: 180,
			autor: "Jennifer",
			editora: "Eu"
    },
    "Boba": {
			quantidadePaginas: 976,
			autor: "Lala",
			editora: "Eu"
    }
	}
	return !nomedolivro ? x : x[nomedolivro];
}




/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// 
book();
{…}
​
Boba: Object { quantidadePaginas: 976, autor: "Lala", editora: "Eu" }
​
Hola: Object { quantidadePaginas: 488, autor: "John", editora: "Eu" }
​
Ola: Object { quantidadePaginas: 180, autor: "Jennifer", editora: "Eu" }
​
<prototype>: Object { … }

​

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
// "O livro [NOME_DO_LIVRO] tem [X] páginas!"
var nomedolivro = "Javascript Ninja";
console.log(`O livro ${nomedolivro} tem  ${book('Javascript Ninja').quantidadePaginas } páginas!`);



/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// 
bookName = 'Boba';
console.log(`O autor do livro ${nomedolivro} é ${book("Boba").autor}.`) // return Lala


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// 
nomedolivro = 'Ola';
console.log(`O livro ${nomedolivro} foi publicado pela editora ${book("Ola").editora}.`)


