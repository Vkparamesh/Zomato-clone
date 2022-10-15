import { JsonWebTokenError } from "jsonwebtoken";
import passport from "passport";
import googleOAuth from "passport-google-oauth2";


import { UserModel } from "../database/allModles"

const GooleStartergy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GooleStartergy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback",
        },

            async (accessToken, refreshToken, proflie, done) => {
                const newUser = {
                    fullName: proflie.displayName,
                    email: proflie.emails[0].value,
                    profliePic: proflie.photos[0].value,
                };
                try {
                    const user = await UserModel.findOne({ email: newUser.email });
                    if (user) {
                        const token = user.generateJwtToken();
                        done(null, { user, token });
                    } else {
                        const user = await UserModel.create(newUser);
                        const token = user.genereteJwtToken();
                        done(null, { user, token });

                    }
                } catch (error) {
                    done(error, null)
                }
            }

        )
    )
    passport.serializeUser((userData, done) => done(null, { ...userData }))
    passport.deserializeUser((id, done) => done(null, id))

}