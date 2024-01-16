const router = require("express").Router();
const articleController = require("../controllers/articleController");
const authController = require("../controllers/authController");

router.post("/", articleController.createArticle);
router.put("/:id", articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);
router.get("/timeline", articleController.getTimeline);
router.get("/u/:username", articleController.getArticlesUser);
router.get("/:id", articleController.getArticle);
router.get("/:id/like", articleController.likeUnlike);

module.exports = router;
