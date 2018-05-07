const api = require('marvel-api');

const marvel = api.createClient({
  publicKey: 'bc4f4a207ccae7fa62e2091797375544',
  privateKey: 'b3e1570892d2dd28bbdfb3c3ebb5652b61146a31',
});

module.exports = {

  getHeroList(nameHeroSearch) {
    const heroListReturn = [];
    let response = null;

    if (nameHeroSearch) response = marvel.characters.findNameStartsWith(nameHeroSearch);
    else response = marvel.characters.findAll(12);

    return new Promise((resolve, reject) => {
      response.then((results) => {
        results.data.forEach((item) => {
          const id = item.id;
          let name = 'Name not found.';
          let description = 'Description not found.';
          let urlImage = 'Images/image_not_available.jpg';

          if (item.name) { name = item.name; }

          if (item.description) { description = item.description; }

          if (item.thumbnail) { urlImage = `${item.thumbnail.path}.${item.thumbnail.extension}`; }

          heroListReturn.push({
            id,
            name,
            description,
            urlImg: urlImage,
          });
        });

        resolve(heroListReturn);
      }, (err) => {
        reject(err);
      });
    });
  },

  getHeroListMOCK(nameHeroSearch) {
    const heroListReturn = [
      {
        id: 1,
        name: 'Wolwerine',
        description: 'Teste descrição',
        urlImg: 'https://i.pinimg.com/originals/4a/18/97/4a18971aaccf70f703236a6aecacd137.jpg',
      },
      {
        id: 2,
        name: 'Homem Aranha',
        description: 'Teste descrição',
        urlImg: 'https://vignette.wikia.nocookie.net/mundodosquadrinhos/images/7/70/Homem-aranha-2_baixa.jpg/revision/latest?cb=20110626235316&path-prefix=pt-br',
      },
      {
        id: 3,
        name: 'Capitão América',
        description: 'Teste descrição',
        urlImg: 'http://cliquetando.xpg.com.br/wp-content/uploads/2014/04/capit%C3%A3o-america.jpg',
      },
      {
        id: 4,
        name: 'Hulk',
        description: 'Teste descrição',
        urlImg: 'https://i.pinimg.com/originals/2f/d2/79/2fd2798a5765a31537e94f2f1c4cb82c.jpg',
      },
      {
        id: 5,
        name: 'Homem de Ferro',
        description: 'Teste descrição',
        urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFius2wq5_ihzB12qCTPdmfuc4LlkdB70zYQriSIi-hKu6doe',
      },
    ];

    if (nameHeroSearch) {
      heroListReturn.push({
        id: 6,
        name: nameHeroSearch,
        description: 'Teste descrição',
        urlImg: 'http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg',
      });
    }

    return heroListReturn;
  },
};

