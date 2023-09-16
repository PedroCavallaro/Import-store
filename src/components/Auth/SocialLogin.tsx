import { useGoogleLogin } from "@react-oauth/google";
import Button from "../Button";
import { sendGoogleAuthToken } from "@/services/auth";

export const SocialLogin = () => {
    const login = useGoogleLogin({
        onSuccess: async (token) => {
            const { access_token } = token;
            sendGoogleAuthToken(access_token);
        },
    });
    return (
        <div className="flex flex-col gap-2 mt-[1rem]">
            <h3 className="text-center">Continue com</h3>
            <Button
                onClick={() => login()}
                type="submit"
                className="shadow-lg h-[3rem] rounded-md"
            >
                <span>Continuar com Google</span>
            </Button>
        </div>
    );
};
