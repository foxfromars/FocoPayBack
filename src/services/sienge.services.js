import axios from "axios";

const siengeURL = process.env.SIENGE_URL;
const siengeUsername = process.env.SIENGE_USERNAME;
const siengePassword = process.env.SIENGE_PASSWORD;

class SiengeServices {
  async getCompanies({ limit = 200, offset = 0 } = {}) {
    return await axios({
      method: "get",
      params: {
        limit,
        offset,
      },
      url: siengeURL + "/public/api/v1/companies",
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async getCreditors({ limit = 200, offset = 0 } = {}) {
    return await axios({
      method: "get",
      params: {
        limit,
        offset,
      },
      url: siengeURL + "/public/api/v1/creditors",
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async getCostCenters({ limit = 200, offset = 0 } = {}) {
    return await axios({
      method: "get",
      params: {
        limit,
        offset,
      },
      url: siengeURL + "/public/api/v1/cost-centers",
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async getPaymentCategories({ limit = 200, offset = 0 } = {}) {
    return await axios({
      method: "get",
      params: {
        limit,
        offset,
      },
      url: siengeURL + "/public/api/v1/payment-categories",
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async getDepartments({ limit = 200, offset = 0 } = {}) {
    return await axios({
      method: "get",
      params: {
        limit,
        offset,
      },
      url: siengeURL + "/public/api/v1/departments",
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async getEnterprises({ limit = 200, offset = 0 } = {}) {
    return await axios({
      method: "get",
      params: {
        limit,
        offset,
      },
      url: siengeURL + "/public/api/v1/enterprises",
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async getUnits(params) {
    return await axios({
      method: "get",
      params: {
        limit: 200,
        offset: 0,
        ...(params || {}),
      },
      url: siengeURL + "/public/api/v1/units",
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async getIndexers({ limit = 200, offset = 0 } = {}) {
    return await axios({
      method: "get",
      params: {
        limit,
        offset,
      },
      url: siengeURL + "/public/api/v1/indexers",
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async getBills({ limit = 200, offset = 0 } = {}) {
    return await axios({
      method: "get",
      params: {
        limit,
        offset,
      },
      url: siengeURL + "/public/api/v1/bills",
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async createBills(data) {
    return await axios({
      method: "post",
      data,
      url: siengeURL + "/public/api/v1/bills",
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async appendAttachmentToBill(id, data, query) {
    return await axios({
      method: "post",
      data,
      url: siengeURL + `/public/api/v1/bills/${id}/attachments`,
      params: query,
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async getBuildingCostEstimationsSheets(enterpriseId) {
    return await axios({
      method: "get",
      url: siengeURL + `/public/api/v1/building-cost-estimations/${enterpriseId}/sheets`,
      params: {
        limit: 200,
        offset: 0,
      },
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }

  async getBuildingCostEstimationsSheetsItems(enterpriseId, buildingUnitId) {
    return await axios({
      method: "get",
      url: siengeURL + `/public/api/v1/building-cost-estimations/${enterpriseId}/sheets/${buildingUnitId}/items`,
      params: {
        limit: 200,
        offset: 0,
      },
      auth: {
        username: siengeUsername,
        password: siengePassword,
      },
    });
  }
}

export default new SiengeServices();
