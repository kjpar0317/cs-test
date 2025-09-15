import { createFileRoute } from "@tanstack/react-router";

import DashboardMain from "@/features/dashboard/components/DashboardMain";

export const Route = createFileRoute("/_authenticated/dashboard/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="w-full bg-[#282c34] flex flex-col items-center text-white">
			<DashboardMain />
		</div>
	);
}
