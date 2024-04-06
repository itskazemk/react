import styles from "./AppLayout.module.css";
import User from "../components/User.jsx";
import { memo } from "react";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

const AppLayout = memo(function AppLayout() {
	return (
		<div className={styles.app}>
			<Sidebar />

			<Map />

			<User />
		</div>
	);
});

export default AppLayout;
