const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter +1 }
        case "DECREMENT":
            return { counter: state.counter -1 }
        default:
            return state
    }
}

var store = Redux.createStore(counter)

var el = document.getElementById('counter')
const render = () => {
    el.innerHTML = store.getState().counter.toString()
}

render() //tampilkan angka inisiasi
store.subscribe(render)

var incEL = document.getElementById('increment')
var decEL = document.getElementById('decrement')

incEL.addEventListener('click',() => {
    store.dispatch({ type: 'INCREMENT'})
})

decEL.addEventListener('click',() => {
    store.dispatch({ type: 'DECREMENT'})
})