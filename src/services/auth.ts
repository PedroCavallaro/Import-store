import { api } from "@/lib/api";
import router from "next/router";

export async function sendGoogleAuthToken(access_token: string) {
    await api
        .post("/login/google", {
            code: access_token,
        })
        .then((res) => {
            const { token } = res.data;
            console.log(token);
        });
}
