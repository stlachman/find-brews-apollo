module.exports = {
  Query: {
    breweries: (_, __, { dataSources }) =>
      dataSources.breweryAPI.getAllBreweries(),
    brewery: (_, { id }, { dataSources }) =>
      dataSources.breweryAPI.getBreweryById({ breweryId: id })
  }
};
