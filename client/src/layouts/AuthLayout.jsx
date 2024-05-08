import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {

    const { pathname } = useLocation();

    // GENERAR TÍTULO DINÁMICO
    let title = "";

    switch (pathname) {
        case "/auth/login":
            title = "Iniciar sesión";
            break;
        case "/auth/register":
            title = "Crear cuenta";
            break;
        case "/auth/confirm-account":
            title = "Confirmar cuenta";
            break;
        case "/auth/forgot-password":
            title = "Recuperar password";
            break;
    }

    return (
        <div className="min-h-screen flex flex-col justify-center bg-gray-100">
            <div className="max-w-md mx-auto w-full ">
                <h1 className="text-[1.5rem] font-bold mb-10 text-center">{pathname.startsWith("/auth/change-password/") ? "Actualizar password" : title}</h1>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AuthLayout;