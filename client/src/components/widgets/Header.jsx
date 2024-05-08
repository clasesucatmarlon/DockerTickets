import useAuth from "../../hooks/useAuth";

const Header = ({ showSidebar, setShowSidebar }) => {
	const { auth } = useAuth();

	return (

		<header className="h-[8vh] flex items-center justify-between px-5 lg:px-8 ">
			<section >
				<button onClick={() => setShowSidebar(true)} className="lg:hidden">
					<i className="fi fi-rr-apps"></i>

				</button>
			</section>
			<nav>
				<ul>
					<li className="flex items-center gap-3">
						<span className="w-9 h-9 flex items-center justify-center bg-blue-700 rounded-full text-white font-bold">
							{auth.firstName.charAt(0)}
							{auth.lastName.charAt(0)}
						</span>
						<div>
							<h5 className="text-sm font-bold">
								{auth.firstName.split(" ")[0]}{' '}
								{auth.lastName.split(" ")[0]}
							</h5>
							<p className="text-[.6rem] lg:text-sm text-gray-400">{auth.email}</p>
						</div>

					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;