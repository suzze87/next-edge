import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
        },
        picture: {
            type: String,
            default: null
        },
        options: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Option",
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("Question", questionSchema);