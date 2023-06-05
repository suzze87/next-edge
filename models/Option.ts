import mongoose from "mongoose";

const optionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            
        },
        value: {
            type: Number,
            default: 0
        },

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("Option", optionSchema);