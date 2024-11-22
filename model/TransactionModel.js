const mongoose = require("mongoose");

const transactionSchemaRules = {
   amount:{
      type:Number,
      required:[true,"Kindly pass the amount"],
      validate: {
          validator:function(){
          return this.amount > 0;
      },
          message:"amount can't be negative"
      },
   },
   transaction_type:{
      type:[String],
      required:true
   },
   user:{
      type: Number,
      required:true
   },
   timestamp:{
    type: Date,
    Default: Date.now()
   },
   status: {
    type: [String],
    default: "PENDING"
   }
}
const transactionSchema = new mongoose.Schema(transactionSchemaRules);

const TransactionModel = mongoose.model("transactionModel",transactionSchema);

module.exports= TransactionModel;