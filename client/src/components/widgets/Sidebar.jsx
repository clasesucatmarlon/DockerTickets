import useAuth from "../../hooks/useAuth";
import { cn } from "../../lib/Utils";

const Sidebar = ({ showSidebar, setShowSidebar }) => {

    const { logout } = useAuth();

    return (
        <>
            <aside className={cn("bg-blue-700 fixed z-50 lg:static h-full lg:h-auto lg:left-0 top-0 w-60 flex flex-col justify-between p-5 text-white transition-all duration-300 ease-in-out", showSidebar ? "left-0" : "-left-full")}
            >
                <section>
                    LOGO
                    MENU
                </section>
                <section>
                    <ul>
                        <li>
                            <button
                                className="flex items-center w-full gap-3 hover:bg-blue-500 transition-colors duration-300 px-3 py-2 rounded-md "
                                onClick={() => logout()}
                            >
                                <i className="fi fi-rr-leave mt-1"></i>
                                <span>Cerrar sesión</span>
                            </button>
                        </li>
                    </ul>
                </section>
            </aside>
            <div 
                className={cn("fixed z-40 left-0 top-0 w-full h-full bg-black/50", showSidebar ? "block" : "hidden")}
                role="button"
                onClick={()=>setShowSidebar(false)}
            >

            </div>
        </>
    )
}

export default Sidebar;