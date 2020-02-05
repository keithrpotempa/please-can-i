import reps from './main.js'

const domFactory = {
    makeForm () { 
        let repHTML = ""
        reps.forEach(rep => repHTML += this.makeRep(rep))

        return `
        <article id="plea_form">
            <h1>Please Can I... </h1>
            <fieldset>
                <label for="plea">Plea:</label>
                <input type="text" name="plea" id="plea" placeholder="Enter plea here...">
            </fieldset>
            <fieldset>
                <label for="repetitions">Repetitions</label>
                <select name="repetitions" id="repetitions">
                    ${repHTML}
                </select> 
            </fieldset>
        </article>
        <div class="buttons">       
            <button id="send__button">Send</button>
        </div>
        `
    },
    makeRep (rep) {
        return `<option value="rep__${rep}">${rep}</option>
        `
    },
    renderer: {
        form () {
            const formContainer = document.querySelector("#plea_form__container")
            let formHTML = domFactory.makeForm();
            formContainer.innerHTML = formHTML;
        },
        plea (plea, times) {
            const pleaContainer = document.querySelector("#plea_output_container");
            pleaContainer.innerHTML = `<h2>Plea Output</h2>`
            pleaContainer.innerHTML += `${plea} <br>`.repeat(times)
        }
    }
}

export default domFactory;