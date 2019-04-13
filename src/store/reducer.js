export default function Reducer(state, action)
{
  switch (action.type) {
    case 'updateView': return {
      ...state,
      view: action.payload
    }
    case 'onload': return {
      ...state,
      today: action.today,
      isToday: action.isToday,
      view: action.view,
      forecast: action.forecast,
    }

    case 'handleLocationSelect': return {
      ...state,
      view: action.view,
    }
    case 'handleDAYSelect': return {
      ...state,
      view: state.forecast[action.index],
      isToday: action.isToday
    }
    case 'setToday': return {
      ...state,
      view: state.today,
      isToday: action.isToday
    }
    case 'setLoading': return {
      ...state, 
      isLoading: action.value
    }
    default: return state
  }
}
