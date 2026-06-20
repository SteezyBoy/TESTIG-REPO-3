async function initMenuPipeline() {
    setDefaultMenu();
    renderMenu();
}

document.addEventListener("DOMContentLoaded", async () => {

    applyDarkMode();

    tableNumber = getTableNumber();

    const tableDisplay =
        document.getElementById("tableDisplay");

    if (tableDisplay) {
        tableDisplay.textContent =
            tableNumber ? `🪑 Table ${tableNumber}` : "";

        tableDisplay.style.display =
            tableNumber ? "block" : "none";
    }

    loadCartFromLocal();

    await initMenuPipeline();

    const fab =
        document.getElementById("orderStatusFab");

    if (fab) {
        fab.style.display = "none";
    }
});
