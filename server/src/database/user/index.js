import mongoose from "mongoose";
import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";


const UserSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, },
        address: [{ detail: { type: String }, for: { type: String } }],
        phoneNumber: [{ type: Number }],


    },
    {
        timestamps: true,
    }
)


///Methdos are attachment
UserSchema.methods.genrateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, process.env.jwtToken)
};

//helper function
UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
    const CheckUserByEmail = await UserModel.findOne({ email });
    const CheckUserByPhone = await UserModel.findOne({ phoneNumber });

    if (CheckUserByEmail || CheckUserByPhone) {
        throw new Error("User Alredy Exists....!")
    }
    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new Error("User does not exist")
    }
    //comparePassword
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatch) throw new Error("Invalid details");
    return user;
};

UserSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next()
    //salting
    bcrypt.genSalt(8, (error, salt) => {
        if (error) return next(error);

        //hashing 

        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error)

            user.password = hash;
            return next();

        })
    })
})

export const UserModel = mongoose.model("users", UserSchema)