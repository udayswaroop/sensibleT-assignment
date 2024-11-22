const TransactionModel = require("../model/TransactionModel");
const {createFactory,
    getAllFactory,
    getByIdFactory,
    updateByIdFactory,
    deleteByIdFactory} = require("../utility/crudFactory");

const createTransactionHandler = createFactory(TransactionModel);
const getAllTransactions = getAllFactory(TransactionModel);
const getTransactionById = getByIdFactory(TransactionModel);
const updateTransactionHandler = updateByIdFactory(TransactionModel);
const deleteTransactionById = deleteByIdFactory(TransactionModel);

module.exports = { createTransactionHandler,
    getAllTransactions,
    getTransactionById,
    updateTransactionHandler,
    deleteTransactionById
}