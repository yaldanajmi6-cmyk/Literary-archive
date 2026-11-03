const params = new URLSearchParams(window.location.search);
const entryId = Number(params.get("id"));

const entry = entries.find(item => item.id === entryId);

const container = document.getElementById("entry-content");

if (entry) {

    const type = document.createElement("p");
    type.textContent = entry.type.toUpperCase();

    const title = document.createElement("h1");
    title.textContent = entry.title;

    const date = document.createElement("p");
    date.textContent = entry.received;

    const content = document.createElement("p");
    content.textContent = entry.content;
    content.style.whiteSpace = "pre-wrap";

    container.appendChild(type);
    container.appendChild(title);
    container.appendChild(date);
    container.appendChild(content);

    if (entry.note && entry.note.trim() !== "") {

        const noteSection = document.createElement("section");

        const noteButton = document.createElement("button");
        noteButton.textContent = "Read marginalia";

        const noteContent = document.createElement("p");
        noteContent.textContent = entry.note;
        noteContent.style.whiteSpace = "pre-wrap";
        noteContent.hidden = true;

        noteButton.addEventListener("click", function() {

            noteContent.hidden = !noteContent.hidden;

            noteButton.textContent = noteContent.hidden
                ? "Read marginalia"
                : "Close marginalia";

        });

        noteSection.appendChild(noteButton);
        noteSection.appendChild(noteContent);

        container.appendChild(noteSection);

    }

} else {

    container.textContent = "Entry not found.";

}