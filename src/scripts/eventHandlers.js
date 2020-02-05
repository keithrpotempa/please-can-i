import domFactory from "./domFactory.js";
import reps from "./main.js";

const eventHandlers = {
    addSendListener() {
        const sendBtn = document.querySelector("#send__button")
        sendBtn.addEventListener("click", (e) => {
            let plea = document.querySelector("#plea").value;
            let times = document.querySelector("#repetitions").value.split("__")[1];
            domFactory.renderer.plea(plea, times)
            document.querySelector("#plea").value = ""
        })
    }
}

export default eventHandlers;