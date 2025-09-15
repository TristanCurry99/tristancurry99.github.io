document.body.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable__title-bar")
    const expandable = ev.target.closest(".expandable");

    if (!isExpandableTitle) {
        return;
    } else {
        expandable.classList.toggle("expandable--open");
    }
    

});



