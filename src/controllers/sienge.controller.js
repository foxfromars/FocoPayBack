import FormData from "form-data";
import siengeServices from "../services/sienge.services.js";

class SiengeController {
  async getCompanies(req, res) {
    try {
      const result = await siengeServices.getCompanies();
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async getCreditors(req, res) {
    try {
      const result = await siengeServices.getCreditors();
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async getCostCenters(req, res) {
    try {
      const result = await siengeServices.getCostCenters();
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async getPaymentCategories(req, res) {
    try {
      const result = await siengeServices.getPaymentCategories();
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async getDepartments(req, res) {
    try {
      const result = await siengeServices.getDepartments();
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async getEnterprises(req, res) {
    try {
      const result = await siengeServices.getEnterprises();
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async getUnits(req, res) {
    try {
      const result = await siengeServices.getUnits(req?.query);
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async getIndexers(req, res) {
    try {
      const result = await siengeServices.getIndexers();
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async getBills(req, res) {
    try {
      const result = await siengeServices.getBills();
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async createBills(req, res) {
    try {
      const result = await siengeServices.createBills(req.body);
      res.send(result.headers.location.split("/")?.slice(-1)?.[0]);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async appendAttachmentToBill(req, res) {
    try {
      const file = req.file;
      const externalFormData = new FormData();
      externalFormData.append("file", file.buffer, {
        filename: file.originalname,
        contentType: file.mimetype,
      });
      const result = await siengeServices.appendAttachmentToBill(
        req.params.id,
        externalFormData,
        req.query
      );
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async getBuildingCostEstimationsSheets(req, res) {
    try {
      const result = await siengeServices.getBuildingCostEstimationsSheets(
        req.params?.enterpriseId,
      );
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }

  async getBuildingCostEstimationsSheetsItems(req, res) {
    try {
      const result = await siengeServices.getBuildingCostEstimationsSheetsItems(
        req.params?.enterpriseId,
        req.params?.buildingUnitId,
      );
      res.json(result.data);
    } catch (err) {
      console.error(err);
      res
        .status(err.status || 500)
        .send(err?.response?.data?.clientMessage || err.message);
    }
  }
}

export default new SiengeController();
