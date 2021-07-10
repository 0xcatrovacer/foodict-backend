const Eatery = require("../models/eatery");

const eaterySelect = async (req, res, next) => {
    try {
        const eatery = await Eatery.findOne({ _id: req.body.restaurant });
        req.eatery = eatery;
        next();
    } catch (e) {
        res.status(501).send(e);
    }
};

module.exports = eaterySelect;
