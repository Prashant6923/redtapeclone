import mongoose from "mongoose";

const ShoesSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    description: String,
});
const Shoes = mongoose.model("Shoes", ShoesSchema);

export default Shoes;