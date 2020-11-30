export default class SW {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.peopleUrl = `${this.baseUrl}/people`;
  }

  getPeople(page = 1) {
    return this._doRequest(`${this.peopleUrl}?page=${page}`);
  }

  getPerson(personId) {
    return this._doRequest(`${this.peopleUrl}/${personId}`);
  }

  async _doRequest(url) {
    try {
      const result = await fetch(url);
      if (!result.ok) {
        throw Error(`Request to '${url}' failed`);
      }
      return result.json();
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }
}
