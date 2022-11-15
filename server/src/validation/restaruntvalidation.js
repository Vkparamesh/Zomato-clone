import joi from "joi";


export const validaetRestaruntcity = (city) => {
    const Schema = joi.object({
        city: joi.string().required()
    })
    return Schema.validateAsync(city);
}

export const validaeteSearchString = (search) => {
    const Schema = joi.object({
        searchString: joi.string().required()
    })
    return Schema.validateAsync(search);
}