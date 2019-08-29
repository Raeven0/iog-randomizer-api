import { observable, action, decorate } from 'mobx'


class DetailsStore {
    file = null
    seed = randomize()
    difficulty = 'Normal'
    goal = 'Dark Gaia'
    statues = 'Random'
    
    setFile = action('setFile', (v) => { this.file = v })
    setSeed = action('setSeed', (v) => { this.seed = v })
    randomizeSeed = action('randomizeSeed', () => { this.seed = randomize()})    
    setDifficulty = action('setDifficulty', (v) => { this.difficulty = v })
    setGoal = action('setGoal', (v) => { this.goal = v })
    setStatues = action('setStatues', (v) => { this.statues = v })
}


decorate(DetailsStore, {
    file: observable,
    seed: observable,
    difficulty: observable,
    goal: observable,
    statues: observable
})

function randomize() {
    const max = 2147483648
    const min = 0

    return Math.floor(Math.random() * (max - min + 1)) + min
}

const detailsStore = new DetailsStore()
export default detailsStore