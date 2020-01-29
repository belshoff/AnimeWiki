const insertIPersonagens = () => {
  const itens = [
    {
      nome: "Meliodas",
      img: "https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/f/f9/Meliodas.png/revision/latest/scale-to-width-down/350?cb=20170208215240&path-prefix=pt-br",
      sobre: "Meliodas é o líder dos Sete Pecados Capitais, carregando o título de Pecado da Ira do Dragão. Ele é o proprietário do renomado bar Chapéu de Javali, e o principal protagonista da série."
    },
    {
      nome: "Elizabeth Liones",
      img: "https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/f/fd/Elizabeth_Liones.png/revision/latest/scale-to-width-down/350?cb=20180424155856&path-prefix=pt-br",
      sobre: "Elizabeth Liones é a principal protagonista feminina da série e é a terceira princesa do Reino de Liones, uma filha adotada do Rei de Liones e é originalmente do Reino de Danafor."
    },
    {
      nome: "Ban",
      img: "https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/c/c6/Ban.png/revision/latest/scale-to-width-down/350?cb=20180422213441&path-prefix=pt-br",
      sobre: "Membro dos Sete pecados Capitais, o pecado da Ganância da Raposa. Após beber da Fonte da Juventude, ele se tornou Imortal e regenera qualquer parte do seu corpo."
    },
    {
      nome: "Escanor",
      img: "https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/0/06/Escanor.png/revision/latest?cb=20180206003949&path-prefix=pt-br",
      sobre: "Escanor é um membro dos Sete Pecados Capitais e é conhecido como o Pecado do Orgulho do Leão. Ele é famoso por adquirir um imenso poder durante o dia, que gradualmente diminui com pôr do sol."
    },
    {
      nome: "King",
      img: "https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/1/1d/King.png/revision/latest/scale-to-width-down/350?cb=20151123171439&path-prefix=pt-br",
      sobre: "King é membro dos Sete Pecados Capitais, o Pecado da Preguiça do Urso. Seu nome verdadeiro é Fairy King Harlequin, ele protege a Floresta do Rei das Fadas e o resto do Reino das Fadas."
    },
    {
      nome: "Diane",
      img: "https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/3/34/Diane.png/revision/latest/scale-to-width-down/350?cb=20170209170133&path-prefix=pt-br",
      sobre: "Diane é um membro dos Sete Pecados Capitais, conhecida como o Pecado da Inveja da Serpente. Ela é membro do Clã dos Gigantes, e é muito maior do que as pessoas comuns."
    },
    {
      nome: "Merlin",
      img: "https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/a/a6/Merlin.png/revision/latest/scale-to-width-down/350?cb=20180422232211&path-prefix=pt-br",
      sobre: "Merlin é um Membro dos Sete Pecados Capitais, o Pecado da Gula do Javali. Seu nome é um pseudônimo do seu nome verdadeiro que é impronunciável para os humanos. "
    },
    {
      nome: "Gowther",
      img: "https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/9/96/Gowther.png/revision/latest/scale-to-width-down/300?cb=20170209152425&path-prefix=pt-br",
      sobre: "Gowther é um membro dos Sete Pecados Capitais, O Pecado Da Luxúria da Cabra,capaz de entrar na mente dos outros e capas de manipular suas lembranças."
    },
    {
      nome: "Elaine",
      img: "https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/4/4e/Elaine_Anime.png/revision/latest/scale-to-width-down/350?cb=20160219020543&path-prefix=pt-br",
      sobre: "Elaine é uma guerreira de elite do Clã das Fadas que realizou o dever da Santa da Fonte da Juventude. Ela também é a irmã mais nova do atual Rei das Fadas, Arlequin."
    },
    {
      nome: "Hawk",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmtiV0Wsvnw-xXuj34JnMdouDZsWN5kSD_wKjXvIetAmaJl6hj",
      sobre: "Hawk é um porco falante raro e companheiro de Meliodas, ele geralmente limpa os restos da comida ruim do Chapéu de Javali que os clientes cospem do chão."
    }
  ]  
  const container = document.getElementById('list')
  let html = ''
  for ( let item of itens ) {
    html += `<div class="card">
              <span class="card-header">
                ${item.nome}
              </span>
              <span class="card-body">
                <img
                  src="${item.img}"
                  alt="${item.nome}"
                  style="height: 15rem;"
                />
              </span>
              <span class="card-footer">
                ${item.sobre}
              </span>
            </div>
    `
  }
  container.innerHTML = html
}

insertIPersonagens()