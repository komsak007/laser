const express = require("express");
const router = express.Router();

const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRelated,
  listCategories,
  listBySearch,
  photo,
  createLaser,
  addLaser,
  updateImages,
} = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read);
router.post("/product/create/:userId", create);
router.delete("/product/:productId/:userId", requireSignin, isAuth, remove);
router.put("/product/:productId/:userId", requireSignin, isAuth, update);
router.put(
  "/product/:productId/image/:userId",
  requireSignin,
  isAuth,
  updateImages
);

router.get("/products", list);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);
router.post("/product/laser", createLaser);
router.post("/product/addlaser", addLaser);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
