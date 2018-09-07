const Lender 	= require('../models').Lender;
const Borrow 	= require('../models').Borrow;
const Borrower	= require('../models').Borrower;

module.exports	={
	addBorrow(req,res){
		return Borrow
		.create({
			borrow_id:req.body.borrow_id,
			borrower_id:req.body.borrower_id,
		})
	}
}