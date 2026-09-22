## AULA 00
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>AULA DE CONFIGURAÇÃO</h1>
    <p>Rafael Sousa Amorim Rodrigues</p>
</body>
</html>

## AULA 01
> -------------------------------------ARQUIVO- anotacao.md-------------------------------------

#Aula 01 - 24/08/2026

## HTML - HyperText Markup Language
O HTML é uma linguagem de marcação de texto, ou seja, seu propósito é estruturar textualmente uma página da Web/Documento.

## Elementos ou tags
Para estruturar um documento HTML utilizamos tags/elementos, por exemplo, para indicar que um texto é um paragrafo utilizamos a tag<p>texto do paragrafo</p>.
Existem tags que tem abertura <p> e fechamento </p>, mas também existem tags "autofechantes" que não possuem fechamento, como a tag <img> de imagem.

### Exemplo de tags:
 - p : Parágrafo
 - h1 : Titulo principal
 - h2 : Titulo secundário

 
 > -------------------------------------ARQUIVO- index.html -------------------------------------
 <h1 style="color: red;">Aula 01 - 24/08/2026</h1>

<h2>HTML - Hypertext Markup Language</h2>
<p>O HTML é uma linguagem de marcação de texto, ou seja, seu propósito é estruturar textualmente uma página da Web/Documento.</p>

<h2>Elementos ou tags</h2>
<p>Para estruturar um documento HTML utilizamos tags/elementos, por exemplo, para indicar que um texto é um paragrafo utilizamos a tag < p > texto do paragrafo </ p >.
Existem tags que tem abertura < p > e fechamento </ p >, mas também existem tags "autofechantes" que não possuem fechamento, como a tag < img > de imagem.</p>

<h3>Exemplos de tags:</h3>
<!-- ul significa lista desordenada, uma lista que não importa a ordem dos fatores -->

<!-- para colocar os elementos em uma lista utilizamos a tag li, que significa item da lista -->
<ul>
    <li>p : Parágrafo</li>                      
    <li>h1 : Titulo Principal</li>                      
    <li>h2 : Titulo Secundário</li>                      
</ul>

 > -------------------------------------ARQUIVO- main.js -------------------------------------
let nome = "Rafael Sousa Amorim Rodrigues"

console.log ("Hello World!")
console.log(nome)
console.log("Olá, " + nome)

## AULA 02
 > -------------------------------------ARQUIVO- index.html -------------------------------------
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <!-- UTF-8 é o padrão para decodificar/interpretar o formato de texto presente no  site -->
    <meta charset="UTF-8">

    <meta name="keywords" content="Pão, Farinha, Mussarela, Mortadela, Manteiga, Requeijão, Café">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- As tags meta servem para informar metadados, ou seja, dados que serão utilizados por outras ferramentas para localização e configuração -->

    <!-- Title é o título da pagina que aprece na aba do navegador -->
    <title>Bread's Pães</title>
</head>

<body>
    <header></header>
    <main>

        <section id="top3paes">
            <h2>Top 3 pães de todos os tempos</h2>
            <ol start="10" type="I">
                <li>Pão francês</li>
                <li>Pão de forma</li>
                <li>Baguete</li>
            </ol>

        </section>

        <section>
            <h2>Complementos</h2>
            <ul type="square">
                <li>Requeijão</li>
                <li>Mussarela</li>
                <li>Peito de peru</li>
            </ul>
        </section>
       
    </main>
    <footer></footer>
</body>

</html>

## LOGICA\aula01
 > -------------------------------------ARQUIVO- variavel.js -------------------------------------
// No JavaScript temos 3 tipos de variavel, sendo let e var alteráveis e const inalterável

// let, var e const são palavras para CRIAR uma variável 

let nome = "Rafael Sousa Amorim Rodrigues"

const dataNasc = "22/08/2010"
const anoNasc = 2010
var anoAtual = 2026

let idade = anoAtual - anoNasc

nome = "Pinguim Linux Torvalds Zedong"
anoNasc = 1999 

console.log(nome)
console.log(idade)

// Já que as variaveis são caixas que armazenam um conteudo, precisamos entender o tipo de ocnteudo que podemos guardar

let inteiro = 5
let decimal = 3.14
let texto = "Goiabada"
let verdadeiroFalso = True 

// Temos 3 tipos de dados basicos no JS: 
// Number = numeros de qualquer tipo 
// String = texto (sempre entre aspas)
// Boolean = True (verdadeiro) e False (falso)


## AULA 03
> -------------------------------------ARQUIVO- index.html -------------------------------------
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Links e conexões</title>
</head>
<body>
    <reader></reader>
    <main>
        <ol>
            <li>
                <h3>Bowser</h3>
                <img src="Bowser.png" alt="Personagem Bowser de Super Mario, é um dragão de pele amarela, e um casco verde nas suas costas com  espinhos, de moicano laranja e pulseiras pretas com espinhos." width="100px">
                <!-- src signfica a fonte, alt descrição da nossa imagem -->
                <a href="https://pt.wikipedia.org/wiki/Bowser">Bowser</a>
            </li>
            <li>
                <h3>Caruso</h3>
                <img src="Caruso.jfif" alt="Personagem Caruso de Todo Mundo Odeia o Chris um jovem com cerca 13 anos de idade, ruivo de olhos verdes com sardas. " width="100px">
            </li>
            <li>
                <h3>Lotso</h3>
                <img src="Lotsu.jfif" alt="Personagem Lotso de Toy Story é um urso de pelucia de cor rosa, e barriga e região bucal de cor branca, com nariz preto e usa uma bengala " width="100px">
            </li>
        </ol>
    </main>
    <footer></footer>
</body>
</html>


## AULA 04

> -------------------------------------ARQUIVO- index.html -------------------------------------
<!DOCTYPE html>
<html lang=pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conexões</title>
</head>
<body>
    <header>
        <nav>
            <a href="./sobre-nos.html">Sobre nós</a>
        </nav>
        <!-- Barra de navegação, vários links juntos -->

    </header>
   
    <main>
        <a href="https://www.youtube.com/" target="_blank">

            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original" alt="" width="100px">
            
         </a>
        
    </main>

    <footer>

    </footer>
</body>
</html>
> -------------------------------------ARQUIVO- sobre-nos.html -------------------------------------
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre nós</title>
</head>
<body>
    <header>
        <nav>
            <!-- A tag <a> ou âncora serve para redirecionar/levar o usuário até outro ponto ou página -->
            <a href="index.html">Pagina Inicial</a>
        </nav>
    </header>
    
    <main>
      <h1>Sobre nós</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quaerat qui officia et neque dolorem sed cupiditate hic aliquid magnam quidem laudantium possimus vel, libero necessitatibus quo pariatur dolorum nulla ea corporis quos error! Quisquam, hic, assumenda quibusdam, cumque perferendis illo soluta accusamus eveniet ut possimus mollitia quod quos ab maxime recusandae repudiandae suscipit sapiente sequi? Nam minus eum nulla recusandae, quos quis a? Veniam, a eligendi dolorum velit quae aut numquam, ea aliquid non esse perspiciatis commodi ut. Facilis vel totam architecto quis iure, exercitationem fugiat quibusdam nesciunt. Eius iure necessitatibus quia ab tempora, quo molestias quam incidunt veritatis, excepturi provident, distinctio obcaecati minima ad doloremque odit et asperiores! A, modi. Cupiditate, voluptates cumque laudantium maiores quidem molestiae quaerat voluptate nobis asperiores? Dolore repudiandae itaque molestias id provident explicabo, quam ab veritatis. Voluptas consequuntur sint ratione exercitationem sequi inventore perspiciatis dolorum voluptate nulla ipsum nostrum, fuga, nobis sed repellendus rerum rem? Laborum, nisi. Magni atque ea eum velit ex soluta accusantium eligendi quibusdam quos dicta? Omnis sunt, veritatis natus ipsa nostrum animi! Libero aliquam laborum delectus exercitationem quis ipsum voluptatibus possimus perferendis suscipit nulla maxime explicabo itaque ut hic facere assumenda ipsa unde, nam quam. Nisi sit saepe voluptatibus!</p>
    </main>
    
    <footer>

    </footer>
</body>
</html>
> -------------------------------------ARQUIVO- produtos.html -------------------------------------
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos</title>
</head>
<body>
   <nav>
    <a href="#item1">item1</a>
   
    <a href="#item2">item2</a>
   
    <a href="#item3">item3</a>
   
    <a href="#item4">item4</a>

    <a href="#item5">item5</a>
   
   </nav>
   
   
    <p id="item1">Item 1</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHizAkNp3uYbTtJe519OAlVZ6fI7gM8IU_cJEAC275cQ&s=10" alt="" width="200">

    <p id="item2">Item 2</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHizAkNp3uYbTtJe519OAlVZ6fI7gM8IU_cJEAC275cQ&s=10" alt="" width="200">

    <p id="item3">Item 3</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHizAkNp3uYbTtJe519OAlVZ6fI7gM8IU_cJEAC275cQ&s=10" alt="" width="200">

    <p id="item4">Item 4</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHizAkNp3uYbTtJe519OAlVZ6fI7gM8IU_cJEAC275cQ&s=10" alt="" width="200">

    <p id="item5">Item 5</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHizAkNp3uYbTtJe519OAlVZ6fI7gM8IU_cJEAC275cQ&s=10" alt="" width="200">


    
</body>
</html>

## AULA 05
> -------------------------------------ARQUIVO- index.html -------------------------------------
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 05</title>
</head>
<body>
    <header>

    </header>

    <main>
        <!-- A tag <article> serve para isolar um conteudo que você gostaria de citar e esse conteudo é proveniente de outro site ou fonte. Essa tag isola e indica que o conteudo dentro dela é INDEPENDENTE do restante de seu site.  Se tenho um site de vender maçãs, faz sentido que eu cite os beneficios do consumo da fruta. Assim em meu site de vendas posso incorporar um ARTIGO externo.-->
        <article>
            <h1>Gustavo Martins, do Grêmio, é sondado por clubes dos Emirados Árabes; veja valor</h1> 
            <h2>Zagueiro pode receber propostas para deixar o clube em breve</h2>  
            <p>O zagueiro Gustavo Martins, do Grêmio, recebeu sondagens de dois clubes dos Emirados Árabes Unidos. Ambos pretendem avançar pela contratação do atleta. Se não ocorrer nesta janela de transferências, aberta no país até 28 de setembro, as tratativas podem voltar no fim do ano.</p>         
        </article>

    <!-- br significa break roll, ou quebrar linha é a tag que utilizamos para pular linha dentro de um paragrafo ou texto -->
        <p>Linha um <br>Linha dois <br>Linha três</p>
    
    <!-- Para destacar palavras ou frases com negrito usamos a taf <strong>. Já se for uma expressão estrangeira ou outro uso de italic, utilizamos a tag <em>. -->
        <p>Minha maior <strong>FELICIDADE</strong>  é aumentar o valor dos <em>shareholders</em> </p>
    </main>

    <footer>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.678273552796!2d-46.62466160703536!3d-23.506841387757085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef6283c6753e7%3A0xc96724dd19a6d04b!2sInstituto%20Percorre!5e0!3m2!1spt-PT!2sbr!4v1788908744184!5m2!1spt-PT!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>


        <!-- Alguns caracteres não estão presentes em nosso teclado, porém isso não significa que não podemos incluí-los em nosso site. Para invocar/utilizar tais caracteres devemos utilizar seu codigo de caracter especial -->
        <p>Desenvolvido por Rafael Sousa&trade; no Instituto Percorre &#174; © </p>
    </footer>

</body>
</html>

> -------------------------------------ARQUIVO- form.html -------------------------------------
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Formulário de cadastro</h1>
    <form action="">

        <label for="email">Insira seu e-mail</label>
        <input type="text" name="" id="email">
    
        <br>

        <label for="">Insira seu nome</label>
        <input type="text" id="nome">

        <br>

        <input type="button" value="Enviar!">

    </form>

</body>
</html>


## AULA 06
> -------------------------------------ARQUIVO- form2.html -------------------------------------
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <header>

    </header>
    <main>
        
        <form action="">
            
            <label for="color">Insira seu e-mail:</label>
            <input type="email" name="email" id="email" required="true" placeholder="joao123@email.com">

            <br>

            <label for="">Insira seu nome:</label>
            <input type="text" name="nome" id="nome" required="true" maxlength="100" placeholder="João da Silva">
            
            <br>
            
            <label for="color">Insira uma cor:</label>
            <input type="color" name="color" id="color">

            <br>

            <label for="">Avalie o atendimento</label>
            
            <br>

            <input type="radio" name="estrelas" id="3estrelas" value="3">
            <label for="3estrelas">⭐⭐⭐</label>
            
            <br>
            
            <input type="radio" name="estrelas" id="2estrelas" value="2">
            <label for="2estrelas">⭐⭐</label>
            
            <br>
            
            <input type="radio" name="estrelas" id="1estrelad" value="1">
            <label for="1estrelas">⭐</label>

            <br>

            <label for="comentario">Deixe um comentário</label>
            
            <br>
            
            <textarea name="" id="comentario" placeholder="Seu comentario aqui"></textarea>
            
            <br>

            <input type="submit" value="Enviar!">

        </form>

    </main>
    <footer>

    </footer>
</body>
</html>

### LOGICA 
## aula 1
> -------------------------------------ARQUIVO- variavel.js -------------------------------------
// No JavaScript temos 3 tipos de variavel, sendo let e var alteráveis e const inalterável

// let, var e const são palavras para CRIAR uma variável 

let nome = "Rafael Sousa Amorim Rodrigues"

const dataNasc = "22/08/2010"
const anoNasc = 2010
var anoAtual = 2026

let idade = anoAtual - anoNasc

nome = "Pinguim Linux Torvalds Zedong"
anoNasc = 1999 

console.log(nome)
console.log(idade)

// Já que as variaveis são caixas que armazenam um conteudo, precisamos entender o tipo de ocnteudo que podemos guardar

let inteiro = 5
let decimal = 3.14
let texto = "Goiabada"
let verdadeiroFalso = True 

// Temos 3 tipos de dados basicos no JS: 
// Number = numeros de qualquer tipo 
// String = texto (sempre entre aspas)
// Boolean = True (verdadeiro) e False (falso)


## aula02
> -------------------------------------ARQUIVO- cnh.js -------------------------------------
let idade = "16"  
let nome = "Thiago"

// Para tirar carteira de motorista a pessoa precisa TER 18 ou MAIS anos de idade
// Se você não tem 18 anos não é posssivel tirar habilitação

// Eu enquanto usuário efetivarei validação de idade para saber se possso obter uma Carteira Nacional de Habilitação. 
// Para obter a CNH devo ter idade igual ou superior a 18 anos no ato de validação, caso contrário, espero receber uma mensagem informando que não possuo idade suficiente.

if (idade >= 18) {
    console.log("Você tem 18 anos ou mais,pode tirar CNH");
}

else {
    console.log("Você não tem 18 anos, você não pode tirar CNH");
}

> -------------------------------------ARQUIVO- exercicio.js -------------------------------------
// Enquanto cliente quero comprar sorvete mas para comprar sorvete preciso ter o dinheiro suficiente caso eu tenha dinheiro suficiente gostaria de receber uma casquinha de chocolote

let precoCasquinha = 2.99
let dinheiro = 2

if (dinheiro >= precoCasquinha) {
    console.log ("Parabéns você recebeu uma casquinha")
}
else {
    console.log ("Você não conseguiu uma casquinha")
}


## aula03
> -------------------------------------ARQUIVO- multipla.js -------------------------------------
// Avaliador de entregas

// Para estruturar decisões no codigo utilizamos a familia if else.
//if = se
//else = senão
//else if = senão se
// O if pede uma ocndição e se ela for atendida, executa o codigo que esta entre {}.
//Já o else serve para atender os casos que não contemplam as condições anteriores.
//Se tivermos mais de uma condição, como no exemplo abaixo, é necessário usar o else if,que nega o if anterior e propõe uma nova condição.
// Por exemplo, se não for nota 5. mas for nota 4, o programa escreve Melhoras! na tela

let nota = 4

if (nota == 5) {
    console.log("AURA! 🕕🕖");
}
else if (nota == 4){
    console.log("Melhoras! 🐎🖇");
}
else if (nota == 3){
    console.log("Estava bem embalado! 📦");
}
else if (nota == 2){
    console.log("Minha vó é melhor que você. 😥💀");
}
else if (nota == 1){
    console.log("Vai trabalhar de CLT pelo resto da eternidade... 🌮");
}
else {
    console.log("INSIRA UMA NOTA VALIDA DE 1 A 5!!!");
}

> -------------------------------------ARQUIVO- sorvete.js -------------------------------------
// sabor é igual a chocolate!!!
let sabor = "cacau"

// sabor é IGUAL a chocolate???
if (sabor == "chocolate") {
    console.log("Aqui está seu sorvete de chocolate");
}
else if (sabor == "morango") {
    console.log("Aqui está seu sorvete de morango");
}
else if (sabor == "baunilha") {
    console.log("Aqui está seu sorvete de baunilha");
}
else {
    console.log("Opções inválidas!");
}





<!-- 

Aula 1

<h1>Rafael Sousa Amorim Rodrigues</h1>

<p>Top 3 musicas</p>
<p>1-Heaven can wait</p>
<p>2-Loose</p>
<p>3-Redemption Song</p>
<img src="imagens/images.jfif" alt="">

Aula 2 Elaine  - Explicações de comportamento social e entrevista de emprego

Aula 2

instalando pres*Doctype- o html sera consumido por ferramentas diferentes, quer dizer que o documento é Html 
*linha 2 / abertura
*parametro: configura a tag
*head: configuração que estamos passando para o computador

*mdn
*w3school CERTIFICADO


CTRL + ; COMENTARIO
tag+tag+tag
        ol>li*3

alt +shift + F

*HTML NÃO É PARA DESIGN, É PARA DITAR O TEXTO, DEPOIS IRA MODELAR SUA TELA COM OUTRA LINGUAGEM!!
*Guia de SEO para iniciantes
*WORD WRAP, remodela seu texto basicamente

INDEX Significa indice: é importantissimo que a primeira pagina do seu site seja index, pelo index vai enocntrar outras partes do seu site...

HTML É UMA LINGUAGEM DE MARCAÇÃO SEMPRE DEVE TER REPRESENTAÇÃO DE INICIO E FINAL
HTML É UMA LINGUAGEM DE MARCAÇÃO SEMPRE DEVE TER REPRESENTAÇÃO DE INICIO E FINAL

Não é usado acentos em programação

li = list itemets 
portugues
live server
material icon theme

*SNIPPET
--!
* Shift + SETA seleiciona
* ALT + Shift + Seta

tailwindcss
getbootstrap
*ASCII art
*validação tcc
*sp tech school
https://w2g.tv/?r=hu2nqb6iqmanxb11x4
*compartilhar codigo no git github (10)
*bootrap
nifkif-fycquS-tyrxe1

natura - escolher empresas com ideias inovadora - breve historia da empresa - ideia inovadora 