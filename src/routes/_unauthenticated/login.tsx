import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/icons/logo.svg";

export const Route = createFileRoute("/_unauthenticated/login")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-full text-center bg-[#282c34]">
			<header className="flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
				<img
					src={logo}
					className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
					alt="logo"
				/>
				<p>
					Edit <code>src/routes/index.tsx</code> and save to reload.
				</p>
				<a
					className="text-[#61dafb] hover:underline"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<a
					className="text-[#61dafb] hover:underline"
					href="https://tanstack.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn TanStack
				</a>
			</header>
		</div>
	);
}
