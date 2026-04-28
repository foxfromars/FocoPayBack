import { Router } from "express";
import siengeController from "../controllers/sienge.controller.js";
import multer from "multer";

const routes = Router();

const upload = multer({ storage: multer.memoryStorage() });

routes.get("/companies", siengeController.getCompanies);
routes.get("/departments", siengeController.getDepartments);
routes.get("/cost-centers", siengeController.getCostCenters);
routes.get("/payment-categories", siengeController.getPaymentCategories);
routes.get("/creditors", siengeController.getCreditors);
routes.get("/indexers", siengeController.getIndexers);
routes.get("/enterprises", siengeController.getEnterprises);
routes.get("/units", siengeController.getUnits);
routes
  .get("/bills", siengeController.getBills)
  .post("/bills/:id/attachments", upload.single("file"), siengeController.appendAttachmentToBill)
  .post("/bills", siengeController.createBills)
  
routes
  .get("/building-cost-estimations/:enterpriseId/sheets/:buildingUnitId/items", siengeController.getBuildingCostEstimationsSheetsItems)
  .get("/building-cost-estimations/:enterpriseId/sheets", siengeController.getBuildingCostEstimationsSheets)

export default routes;
