import { TanstackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import Header from "../components/layout/Header";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<main className="w-full h-[calc(100vh_-_73px)] overflow-y-auto">
				<Outlet />
			</main>
			<TanstackDevtools
				config={{
					position: "bottom-left",
				}}
				plugins={[
					{
						name: "Tanstack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
					{
						name: "React Query",
						render: <ReactQueryDevtools />,
					},
				]}
			/>
		</>
	),
});
