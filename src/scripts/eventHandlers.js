import domFactory from "./domFactory.js";
import reps from "./main.js";
import randomGenerator from "./randomGenerator.js"

const eventHandlers = {
    addSendListener() {
        const sendBtn = document.querySelector("#send__button")
        sendBtn.addEventListener("click", (e) => {
            let plea = document.querySelector("#plea").value;
            let times = document.querySelector("#repetitions").value.split("__")[1];
            if (times = "random") {
                times = randomGenerator.num(1, reps.length);
                console.log("plea will run", times, "times")
            }
            domFactory.renderer.plea(plea, times)
            document.querySelector("#plea").value = ""
        })
    }
}

export default eventHandlers;