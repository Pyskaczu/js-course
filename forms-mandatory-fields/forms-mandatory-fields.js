window.addEventListener("load", ev => {
    initForm();
});

let allGood = true;
let tag = null;

function initForm() {
    document.forms[0].addEventListener("submit", ev => {
        if (!validForm()) {
            ev.preventDefault();
        }
    });
}

function validForm() {
    allGood = true;
    let allTags = document.getElementsByTagName("*");
    for (let i = 0; i < allTags.length; i++) {
        if (!validTag(allTags[i])) {
            allGood = false;
        }
    }

    return allGood;
}

function validTag(aTag) {
    tag = aTag;
    let outClass = "";
    let allClasses = tag.className.split(" ");

    if(allClasses[0] === "") {
        return true;
    }

    for (let i = 0; i < allClasses.length; i++) {
        outClass += validBasedOnClass(allClasses[i]) + " ";
    }

    tag.className = outClass;

    if (outClass.indexOf("invalid") > -1) {
        invalidLabel(tag.parentNode);
        tag.focus();
        if (tag.nodeName === "INPUT") {
            tag.select();
            return false;
        }
    }

    return true;
}

function invalidLabel(parentNode) {
    if(parentNode.nodeName === "LABEL") {
        parentNode.className += " invalid";
    }
}

function validBasedOnClass(clazz) {
    switch (clazz) {
        case "":
        case "invalid":
            return "";
        case "reqd":
            if (allGood && tag.value === "") {
                return "invalid " + clazz;
            }
            return clazz;
        default:
            if (allGood && !crossCheck(clazz)) {
                return "invalid "
            }
            return clazz;
    }
}



function crossCheck(clazz) {
    if(!document.getElementById(clazz)) {
        return false;
    }

    return tag.value === document.getElementById(clazz).value;
}
