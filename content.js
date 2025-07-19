function removeNoFocusDivs() {
    const divs = document.querySelectorAll('div[data-no-focus-lock="true"]');
    divs.forEach(div => {
        div.remove();
        console.log("🗑️ Removed <div data-no-focus-lock='true'>");
    });
}

removeNoFocusDivs();

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
            removeNoFocusDivs();
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log("👁️ DOM observer for [data-no-focus-lock='true'] started.");
