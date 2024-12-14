import Shoes from "../model/shoes.model.js";

export const getShoes = async(req, res) => {
    try {
        const shoes = await Shoes.find();
        res.status(200).json(shoes);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
export default getShoes;