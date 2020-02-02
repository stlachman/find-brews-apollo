const { RESTDataSource } = require("apollo-datasource-rest");

class BreweryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.openbrewerydb.org/";
  }

  async getAllBreweries() {
    const response = await this.get("breweries");
    return Array.isArray(response)
      ? response.map(brewery => this.breweryReducer(brewery))
      : [];
  }

  breweryReducer(brewery) {
    return {
      id: brewery.id || 0,
      name: `${brewery.name}`,
      breweryType: brewery.brewery_type,
      street: brewery.street,
      city: brewery.city,
      state: brewery.state,
      postalCode: brewery.postal_code,
      country: brewery.country,
      longitude: brewery.longitude,
      latitude: brewery.latitude,
      phone: brewery.phone,
      websiteUrl: brewery.website_url,
      updatedAt: brewery.updated_at,
      tagList: [...brewery.tag_list]
    };
  }

  async getBreweryById({ breweryId }) {
    const response = await this.get("breweries", { id: breweryId });
    return this.breweryReducer(response[0]);
  }

  getBreweriesById({ breweryIds }) {
    return Promise.all(
      breweryIds.map(breweryId => this.getBreweryById({ breweryId }))
    );
  }
}

module.exports = BreweryAPI;
