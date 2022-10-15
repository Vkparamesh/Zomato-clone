import joi from "joi";


export const validateSignUp = (userData) => {
    const Schema = joi.object({
        fullName: joi.string().required().min(5),
        email: joi.string().required().email(),
        password: joi.string().pattern(new RegExp("^[a-zA-z0-9]{3,30}$")),
        address: joi.array().items(joi.object({ details: joi.string(), for: joi.string })),
        phoneNumber: joi.array().items(joi.number().min(10).max(10))
    })


    return Schema.validateAsync(userData);
}

export const validateSignIn = (userData) => {
    const Schema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required()


    })
    return Schema.validateAsync(userData);
}