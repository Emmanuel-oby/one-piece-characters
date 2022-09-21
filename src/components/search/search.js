import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { API_URL, apiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
	const [search, setSearch] = useState(null);
	const [users, setUsers] = useState([]);


	const loadOptions = (inputValue) => {
		return fetch(`${API_URL}`, apiOptions)
			.then((res) => res.json())
			.then((json) => {
				setUsers(json);
				let matches=[];
				matches = users.filter((user) => {
					const regex = new RegExp(`${inputValue}`, "gi");
					return user.name.match(regex);
				});
				return {
					options: matches.map((character) => {
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
