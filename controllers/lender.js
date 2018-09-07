const Lender 	= require('../models').Lender;
// const Borrow 	= require('../models').borrow;
// const Borrower	= require('../models').borrower;



module.exports = {


  add(req, res) {
    return Lender
      .create({
        lender_id: req.body.lender_id,
        lender_name: req.body.lender_name,
      })
      .then((lender) => res.status(201).send(lender))
      .catch((error) => res.status(400).send(error));
  },


};