import { useCities } from "../contexts/CitiesContext.jsx";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";
import styles from "./countryList.module.css";

function CountryList() {
	const { isLoading, cities } = useCities();

	if (isLoading) return <Spinner />;
	else if (!cities.length)
		return <Message message={"add your first countries"} />;

	const countries = cities.reduce((arr, city) => {
		if (!arr.map((el) => el.country).includes(city.country))
			return [
				...arr,
				{ country: city.country, emoji: city.emoji, id: city.id },
			];
		else return arr;
	}, []);

	return (
		<ul className={styles.countryList}>
			{countries.map((country) => (
				<CountryItem country={country} key={country.id} />
			))}
		</ul>
	);
}

export default CountryList;
