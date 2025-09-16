import AuthenticatedLayout from "@/components/layouts/template/AuthenticatedLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
	component: () => <AuthenticatedLayout />,
});
