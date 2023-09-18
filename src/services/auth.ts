import { UserRouteRes } from "@/@types/types";
import { api } from "@/lib/api";
import { setCookie, parseCookies } from "nookies";

export async function sendGoogleAuthToken(access_token: string) {
    await api
        .post<UserRouteRes>("/auth/google", {
            token: access_token,
        })
        .then((res) => {
            const { token } = res.data;
            setTokenOnCookies(token);
        });
}
export function setTokenOnCookies(token: string) {
    setCookie(null, "auth", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
    });
}
export function verifyToken() {
    const { auth } = parseCookies();

    return auth ? true : false;
}
