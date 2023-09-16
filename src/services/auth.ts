import { api } from "@/lib/api";
import { setCookie } from "nookies";

export async function sendGoogleAuthToken(access_token: string) {
    await api
        .post("/auth/google", {
            token: access_token,
        })
        .then((res) => {
            const { token } = res.data;
            console.log(token);
        });
}
export function setTokenOnCookies(token: string) {
    setCookie(null, "auth", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
    });
}
