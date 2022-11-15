import JwtPassport from "passport-jwt";

import { UserModel } from "../database/allModles"

const JWtStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;




const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "Vkparamesh"
}

export default (passport) => {
    passport.use(
        new JWtStrategy(options, async (jwt__payload, done) => {
            try {
                const doesUserExist = await UserModel.findById(jwt__payload.user)
                if (!doesUserExist) return done(null, false);
                return done(null, doesUserExist)
            } catch (error) {
                throw new Error(error)
            }
        })
    )

}

