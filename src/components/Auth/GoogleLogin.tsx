import Button from "../Button";

const GoogleLogin = () => {
    return (
        <div className="flex flex-col gap-2 mt-[1rem]">
            <h3 className="text-center">Continue com</h3>
            <Button type="submit" className="shadow-lg h-[3rem] rounded-md">
                <span>Continuar com Google</span>
            </Button>
        </div>
    );
};

export default GoogleLogin;
