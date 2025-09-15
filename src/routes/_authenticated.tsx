import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
	component: () => <AuthenticatedLayout />,
});
