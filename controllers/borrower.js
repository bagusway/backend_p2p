// const Lender 	= require('../models').lender;
const Borrow 	= require('../models').borrow;
const Borrower	= require('../models').Borrower;

module.exports={
	addBorrower(req, res) {
    return Borrower
      .create({
        borrower_id: req.body.borrower_id,
        borrower_name: req.body.borrower_name,
      })
      .then((borrower) => res.status(201).send(borrower))
      .catch((error) => res.status(400).send(error));
  },
}
