import { memo } from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User.jsx";
import styles from "./AppLayout.module.css";

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
