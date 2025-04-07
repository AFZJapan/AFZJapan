const isDesktop = window.matchMedia("(hover: hover)").matches;

const images = document.querySelectorAll("img");
const dialog = document.createElement("dialog");
const img = document.createElement("img");
const close = document.createElement("button");

close.textContent = "閉じる";
close.addEventListener("click", () => dialog.close());

dialog.appendChild(img);
dialog.appendChild(close);
document.body.appendChild(dialog);

dialog.addEventListener("click", (event) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
    ) {
        dialog.close();
    }
});

function enlargeImg(image) {
    img.src = image.src;
    dialog.showModal();
}
