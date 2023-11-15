const MealModel = require("../Models/mealtypes");

const getAllMealTypes = async (req, res) => {
  try {
    const data = await MealModel.find();
    res.status(200).json({
      message: "Meal Types fetched successfully",
      mealtypes: data,
    });
  } catch (err) {
    res.status(404);
    res.json({ error: err });
  }
};

module.exports = { getAllMealTypes };
