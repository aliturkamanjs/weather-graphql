const initialState = {
  background: 'bg-darkwhite',
  isLight: true,
}

export const reducer = (
  state: stateProps = initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case 'SET_BACKGROUND':
      return {
        ...state,
        background: action.payload,
        isLight:
          action.payload === 'bg-darkwhite'
            ? true
            : action.payload === 'bg-desert'
            ? false
            : action.payload === 'bg-forest'
            ? false
            : action.payload === 'bg-moon'
            ? false
            : action.payload === 'bg-rain'
            ? false
            : action.payload === 'bg-dark'
            ? true
            : false,
      }
    default:
      return state
  }
}
