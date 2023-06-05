import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema(
    {
        value: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("Suggestion", suggestionSchema);