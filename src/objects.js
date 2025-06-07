import { faker } from "@faker-js/faker";

export const main = () => {
	const objectElement = document.getElementById("object");
	const assignNewPersonButton = document.getElementById("assign-new-person");

	const addNewPropertyButton = document.getElementById("add-new-property");

	const object = {
		name: "John",
		age: 30,
		city: "New York",
	};

	const showObject = () => {
		objectElement.innerHTML = "";
		const keys = Object.keys(object);
		keys.forEach((key) => {
			const value = document.createElement("div");
			value.textContent = object[key];
			objectElement.appendChild(value);
		});
	};

	showObject();

	const updateObject = () => {
		Object.assign(object, {
			name: faker.person.fullName(),
			age: faker.number.int({ min: 18, max: 100 }),
			city: faker.location.city(),
		});
		showObject();
	};

	const addNewProperty = () => {
		object.bio = faker.person.bio();
		objectElement.textContent = JSON.stringify(object);
		showObject();
	};

	assignNewPersonButton.addEventListener("click", updateObject);
	addNewPropertyButton.addEventListener("click", addNewProperty);
};

main();
