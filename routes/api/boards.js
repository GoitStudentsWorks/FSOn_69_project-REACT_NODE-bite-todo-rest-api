const express = require("express");
const router = express.Router();
const {
  addBoard,
  addColumn,
  addTask,
  updateTask,
  updateColumn,
  updateBoard,
  getTasks,
  getColumns,
  getColumnsTasks,
  getAllBoards,
  deleteTask,
  deleteColumn,
  deleteBoard,
} = require("../../controllers/boards");

const { scheme } = require("../../schemas/tasks");
const { validateBody, authenticate, isValidId } = require("../../middlewares");

router.post("/", authenticate, validateBody(scheme.boardJoiSchema), addBoard);
router.put(
  "/:boardId",
  authenticate,
  isValidId,
  validateBody(scheme.boardJoiSchema),
  updateBoard
);
router.get("/", authenticate, getAllBoards);
router.delete("/:boardId", authenticate, isValidId, deleteBoard);

router.post(
  "/:boardId/columns",
  authenticate,
  isValidId,
  validateBody(scheme.columnJoiSchema),
  addColumn
);
router.put(
  "/:boardId/columns/:columnId",
  authenticate,
  isValidId,
  validateBody(scheme.columnJoiSchema),
  updateColumn
);
router.get("/:boardId/columns", authenticate, isValidId, getColumns);
router.get("/:boardId/columnstasks", authenticate, isValidId, getColumnsTasks);
router.delete(
  "/:boardId/columns/:columnId",
  authenticate,
  isValidId,
  deleteColumn
);

router.post(
  "/:boardId/columns/:columnId/tasks",
  authenticate,
  isValidId,
  validateBody(scheme.taskJoiSchema),
  addTask
);
router.put(
  "/:boardId/columns/:columnId/tasks/:taskId",
  authenticate,
  isValidId,
  validateBody(scheme.taskJoiSchema),
  updateTask
);
router.get(
  "/:boardId/columns/:columnId/tasks",
  authenticate,
  isValidId,
  getTasks
);
router.delete(
  "/:boardId/columns/:columnId/tasks/:taskId",
  authenticate,
  isValidId,
  deleteTask
);

module.exports = router;
