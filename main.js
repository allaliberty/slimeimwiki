
var page = window.location.href.split("/").pop();


$(function () {
    $("#nav-placeholder").load("/nav");
})

if (page === "characters") {
    $(function () {
        $("#character-placeholder").load("/character");
    })
}





console.log(page)
console.log(window.top)

const data = {
    0: {
        Name: "Rimuru Tempest"

    },

}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('.hamb').then(() => {
    const Hamb = document.querySelector('.hamb')
    const List = document.querySelector('.buttonsdiv')


    Hamb.addEventListener("click", () => {
        const clicked = List.getAttribute("clicked")

        if (clicked === "false") {
            List.setAttribute("clicked", "true")
        }
        else
            List.setAttribute("clicked", "false")
    })

})

