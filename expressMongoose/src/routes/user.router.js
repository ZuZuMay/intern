const express = require("express")
const { getUser, createUser , getUserDetail, userUpdate, deleteUserMany, deleteUser, getUserOne } = require("../controllers/user.controller")

const router = express.Router()

router.get('/', getUser)
router.post('/', createUser)
router.get('/',getUserOne)
router.get('/:id', getUserDetail)
router.put('/:id', userUpdate)
router.delete('/:id',deleteUser)
router.delete('/',deleteUserMany)

module.exports = router