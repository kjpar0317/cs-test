import { Outlet } from "@tanstack/react-router";

import Header from "../common/Header";

export default function UnauthenticatedLayout() {
	return (
		<>
			<Header />
			<main className="w-full h-[calc(100vh_-_73px)] overflow-y-auto">
				<Outlet />
			</main>
		</>
	);
}
