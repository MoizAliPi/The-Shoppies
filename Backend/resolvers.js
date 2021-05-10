module.exports = {
    Query: {
      movie: (_, { movieName }, { dataSources }) => dataSources.movieAPI.getAMovie({ movieName })
    },
    Movie: {
      title: ({ Title }) => Title,
      year: ({ Year }) => Year,
      poster: ({ Poster }) => Poster,
      genre: ({ Genre }) => Genre,
      director: ({ Director }) => Director,
      plot: ({ Plot }) => Plot
    },
  }