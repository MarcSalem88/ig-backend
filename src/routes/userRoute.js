const router = require("express").Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.put("/upload", authController.upload);
router.post("/refresh", authController.refresh);
router.get("/searchUser", userController.searchUsers);
router.get("/u/:username", userController.getUserByUsername);
router.get("/:id", userController.getUser);
router.get("/followings/:username", userController.getFollowings);
router.get("/followers/:username", userController.getFollowers);
router.put("/:id", authController.verify, userController.updateUser);
router.put(
  "/:username/follow",
  userController.followUser
);
router.put(
  "/:username/unfollow",
  userController.unfollowUser
);

module.exports = router;
