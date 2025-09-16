import { useRouterState } from "@tanstack/react-router";

// CSS로 전체 화면을 덮는 스타일
const overlayStyle = {
	// position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	backgroundColor: "rgba(255, 255, 255, 0.7)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	zIndex: 9999,
	fontSize: "2rem",
};

export default function GlobalLoadingOverlay() {
	const routerState = useRouterState();

	// 라우터 상태가 'pending'일 때만 오버레이를 렌더링
	if (routerState.status === "pending") {
		return (
			<div className="fixed bg-transparent" style={overlayStyle}>
				<div>LOADING...</div>
			</div>
		);
	}

	return null;
}
