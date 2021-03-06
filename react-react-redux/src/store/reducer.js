const defaultState = {
  inputValue: '123',
  list: [1],
  data:[]
}

export default (state = defaultState, action) => {
  if(action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.value)
    console.log(newState.list)
    return newState // reducer 有一个限制， 可以接收state, 但是绝对不能修改state
  }
  return state
}