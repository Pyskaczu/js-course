window.addEventListener("load", ev => {
    initForm();
});

let monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function initForm() {
    let monthsSelect = $("#months")[0];
    monthsSelect.selectedIndex = 0;
    monthsSelect.addEventListener("change", ev => {
        populateDays(ev.target)
    });
}

function populateDays(monthsSelect) {
    let monthsStr = monthsSelect.options[monthsSelect.selectedIndex].value;

    if (monthsStr !== "") {
        let monthInt = parseInt(monthsStr);

        let daysSelect = $("#days")[0];
        daysSelect.options.length = 0;
        for (let i = 0; i < monthsDays[monthInt]; i++) {
            daysSelect.options[i] = new Option(i + 1 + "");
        }
    }
}


