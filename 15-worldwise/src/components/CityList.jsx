import { useCities } from "../contexts/CitiesContext.jsx";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CityList() {
	const { isLoading, cities } = useCities();

	if (isLoading) return <Spinner />;
	else if (!cities.length) return <Message message={"add your first city"} />;

	return (
		<ul className={styles.cityList}>
			{cities.map((city) => (
				<CityItem city={city} key={city.id} />
			))}
		</ul>
	);
}

export default CityList;
