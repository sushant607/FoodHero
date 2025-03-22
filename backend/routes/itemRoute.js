import express from "express";
import {getDonationItems,getMarketplaceItems,getItemById} from "../controller/ShowItemController.js"

const router = express.Router();
router.get("/itemlist/donations", getDonationItems);
router.get("/itemlist/marketplace",getMarketplaceItems);
router.get("/itemlist/item:id",getItemById);

export default router;
