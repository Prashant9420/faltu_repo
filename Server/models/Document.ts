import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            // required: true,
            unique: true,
        },
        data: {
            type: Object,
            required: true,
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        collaborators: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Document", DocumentSchema);