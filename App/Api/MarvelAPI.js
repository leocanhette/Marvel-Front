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

          if (item.name) name = item.name;

          if (item.description) description = item.description;

          if (item.thumbnail) urlImage = `${item.thumbnail.path}.${item.thumbnail.extension}`;

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

};

