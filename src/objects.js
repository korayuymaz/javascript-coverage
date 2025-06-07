import { faker } from "@faker-js/faker";

export const main = () => {
	const objectElement = document.getElementById("object");
	const assignNewPersonButton = document.getElementById("assign-new-person");

	const addNewPropertyButton = document.getElementById("add-new-property");
	const currentObjectToListButton = document.getElementById(
		"current-object-to-list"
	);
	const listItems = document.getElementById("list");

	const object = {
		name: faker.person.fullName(),
		age: faker.number.int({ min: 18, max: 100 }),
		city: faker.location.city(),
	};

	const fakerPersonalInformationList = () => {
		return Array.from({ length: 10 }, () => ({
			name: faker.person.fullName(),
			age: faker.number.int({ min: 18, max: 100 }),
			city: faker.location.city(),
		}));
	};

	const showObject = (objectToShow, element, isList = false) => {
		if (!isList) {
			element.innerHTML = "";
		}
		const keys = Object.keys(objectToShow);
		keys.forEach((key) => {
			const value = document.createElement("div");
			value.textContent = objectToShow[key];
			element.appendChild(value);
		});
	};

	showObject(object, objectElement);

	const updateObject = () => {
		Object.assign(object, {
			name: faker.person.fullName(),
			age: faker.number.int({ min: 18, max: 100 }),
			city: faker.location.city(),
		});
		showObject(object, objectElement);
	};

	const addNewProperty = () => {
		object.bio = faker.person.bio();
		showObject(object, objectElement);
	};

	const addCurrentObjectToList = () => {
		const myList = fakerPersonalInformationList();
		const listWithCurrentObject = [...myList, object];
		// or myList.push(object); would work too
		// or myList.reduce((acc, item) => [...acc, item], [object]); would work too
		// or myList.concat([object]); would work too (but it returns a new array)
		listWithCurrentObject.forEach((item) => {
			const newListItem = document.createElement("div");
			newListItem.classList.add("card");
			showObject(item, newListItem, true);
			listItems.appendChild(newListItem);
		});
	};

	assignNewPersonButton.addEventListener("click", updateObject);
	addNewPropertyButton.addEventListener("click", addNewProperty);
	currentObjectToListButton.addEventListener("click", addCurrentObjectToList);
};

main();
