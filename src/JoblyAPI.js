import axios from 'axios';

const BASE_URL = "http://localhost:3001/"
const TESTING_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lb3ciLCJpYXQiOjE1NTM3MDU3NjV9.7GcCe3M9FjTcuLWdfw24SeTHU_ygSe9EP7LEOO_g344"


class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = TESTING_TOKEN;

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData})).data;
        // axios sends query string data via the "params" key,
        // and request body data via the "data" key,
        // so the key we need depends on the HTTP verb
    }

    catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompanies(params = {}) {
    let res = await this.request(`companies/`, params);
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getJobs(params) {
    let res = await this.request(`jobs/`, params);
    return res.jobs;
  }

  // login makes post request to /auth/login with username and password
  static async getTokenLogin(data) {
    let res = await this.request(`auth/login`, data, "post");
    return res.token;
  }

  // login makes post request to /auth/login with username and password
  static async getTokenRegister(data) {
    let res = await this.request(`users/`, data, "post");
    return res.token;
  }

  // get one user info
  static async getUserInfo(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // apply for job and get message
  static async getApplicationMsg(id) {
    let res = await this.request(`jobs/${id}/apply`, {}, "post");
    return res.message;
  }
}

export default JoblyApi;