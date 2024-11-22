const express = require('express');
const TransactionRouter = express.Router();

const { createTransactionHandler,
    getAllTransactions,
    getTransactionById,
    updateTransactionHandler,
    deleteTransactionById
} = require("../controller/TransactionController");

const checkInput = function(req,res,next){
    if(req.method == "POST"){
        const transactionDetails = req.body;
        const isEmpty = Object.keys(transactionDetails).length == 0;
        if(isEmpty){
            res.status(404).json({
                status:"failure",
                message:"transaction Details are empty"
            })
        }
    }else{
        next();
    }
}
/********transactions*******/
TransactionRouter.get("/",getAllTransactions);
TransactionRouter.post("/",checkInput,createTransactionHandler);
TransactionRouter.put("/:transactionId",updateTransactionHandler)
TransactionRouter.get("/:transactionId",getTransactionById)
TransactionRouter.delete("/:transactionId",deleteTransactionById);

module.exports = TransactionRouter;