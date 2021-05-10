const { RESTDataSource } = require('apollo-datasource-rest')


class OmdbAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'http://www.omdbapi.com/';
    }
  
    async getAMovie(t) {  
      const result = await this.get(`?t=${t.movieName}&apikey=58848b4d&type=movie&page=4`);
      console.log(result);
      return result;
    }
  };

  module.exports = OmdbAPI;