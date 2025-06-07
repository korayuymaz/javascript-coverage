import { faker } from "@faker-js/faker";

export const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

export const main = () => {
	const initialArray = document.getElementById("initial-array");
	const updatedArray = document.getElementById("updated-array");
	const updateArrayButton = document.getElementById("update-array");
	const removeLastItemButton = document.getElementById("remove-last-item");
	const showLastItemButton = document.getElementById("show-last-item");

	const updateArray = () => {
		updatedArray.innerHTML = "";
		fruits.forEach((fruit) => {
			const li = document.createElement("li");
			li.textContent = fruit;
			li.classList.add("mb-1", "text-sm");
			updatedArray.appendChild(li);
		});
	};

	initialArray.textContent = fruits.join(", ");

	updateArrayButton.addEventListener("click", () => {
		let randomFruit = faker.food.fruit();
		if (fruits.includes(randomFruit)) {
			randomFruit = faker.food.fruit();
		}

		fruits.push(randomFruit);
		updateArray();
	});

	removeLastItemButton.addEventListener("click", () => {
		fruits.pop();
		updateArray();
	});

	showLastItemButton.addEventListener("click", () => {
		console.log(fruits[fruits.length - 1]);
	});
};

main();
