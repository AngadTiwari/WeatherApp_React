const ACTION_TYPE = {drawerOption: "actionTypeDrawerOption", city: "actionTypeCity"}

function selectDrawerOption(option) {
  return {
    type: ACTION_TYPE.drawerOption,
    option
  }
}

function selectCity(city) {
  return {
    type: ACTION_TYPE.city,
    city
  }
}

export { ACTION_TYPE, selectDrawerOption, selectCity }
