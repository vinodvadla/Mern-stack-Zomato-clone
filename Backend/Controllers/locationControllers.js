const locModel = require("../Models/locations")

const getAllLocations = async (req, res) => {
    const data = await locModel.find({});
    res.json({
        maessage: "Locations fetched successfully",
        locations: data
    })
}
module.exports = { getAllLocations }
