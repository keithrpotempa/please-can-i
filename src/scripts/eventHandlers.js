import domFactory from "./domFactory.js";

const eventHandlers = {
    addSendListener() {
        const sendBtn = document.querySelector("#send__button")
        sendBtn.addEventListener("click", (e) => {
            let plea = document.querySelector("#plea").value;
            domFactory.renderer.plea(plea)
            document.querySelector("#plea").value = ""
        })
    }
}

export default eventHandlers;