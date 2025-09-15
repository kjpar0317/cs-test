import { TanstackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import ErrorPage from "@/components/layout/ErrorPage";
import NotFoundPage from "@/components/layout/NotFoundPage";

export const Route = createRootRoute({
	errorComponent: ErrorPage,
	notFoundComponent: NotFoundPage,
	component: () => (
		<>
			<Outlet />
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
