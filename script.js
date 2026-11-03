const entriesList = document.getElementById("entries-list");

entries.sort((a, b) => a.id - b.id);

entries.forEach(entry => {

    const item = document.createElement("article");
    item.classList.add("entry-item");

    const type = document.createElement("p");
    type.textContent = entry.type.toUpperCase();

    const title = document.createElement("h3");
    title.textContent = entry.title;

    const date = document.createElement("p");
    date.textContent = entry.received;

    const link = document.createElement("a");
    link.href = `entry.html?id=${entry.id}`;
    link.textContent = "Read entry";

    item.appendChild(type);
    item.appendChild(title);
    item.appendChild(date);
    item.appendChild(link);

    entriesList.appendChild(item);

});