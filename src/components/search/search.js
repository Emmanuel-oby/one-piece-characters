import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { API_URL, apiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
	const [search, setSearch] = useState(null);

	const loadOptions = (inputValue) => {
		return fetch(API_URL, apiOptions)
			.then((res) => res.json())
			.then((json) => {
				return {
					options: json.data.map((character) => {
						return {
							value: `${character.affiliation}`,
							label: `${character.name}, ${character.debut}`,
						};
					}),
				};
			})
			.catch((err) => console.error("error:" + err));
	};

	const handleOnChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	return (
		<AsyncPaginate
			placeholder="Search for Characters"
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	);
};

export default Search;
