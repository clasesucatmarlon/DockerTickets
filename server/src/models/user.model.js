import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            default: '',
        },
        permissions: {
            type: [String],
            enum: ['default', 'support'],
            default: ['default'],
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        isConfirmed: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = model('User', userSchema);

export default User;