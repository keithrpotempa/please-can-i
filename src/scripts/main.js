import domFactory from './domFactory.js'

// Creating a global array of reps from 1-100
let reps = []

for (let i = 1; i <= 100; i++) {
    reps[i] = i;
}

export default reps

domFactory.renderer.form();