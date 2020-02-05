
// Creating a global array of reps from 1-100
let reps = []

for (let i = 1; i <= 100; i++) {
    reps[i] = i;
}

const factory = {
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
        `
    },
    makeRep (rep) {
        return `<option value="rep__${rep}">${rep}</option>
        `
    }
}

const renderer = {
    form () {
        const formContainer = document.querySelector("#plea_form__container")
        let formHTML = factory.makeForm();
        formContainer.innerHTML = formHTML
    }
}

renderer.form();

{/* <option value="1">JavaScript</option> */}