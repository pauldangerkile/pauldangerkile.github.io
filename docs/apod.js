const NASA_APOD_API = "https://api.nasa.gov/planetary/apod?api_key=nFIYcpkzwop3UzaMYoaD0FN9ukbaUu5ddZofAmoR";

fetch(NASA_APOD_API)
	.then((response) => response.json())
	.then((data) => {
		const apodElement = document.getElementById("apod");
		apodElement.innerHTML = `<h3>${data.title}</h3><img src="${data.url}" alt="${data.title}" class="img-fluid"><br />&nbsp;<br /><p>${data.explanation}</p>`;
	})
	.catch((error) => console.error("Error:", error));
