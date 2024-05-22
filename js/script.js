const SELECT = document.querySelector('select')

const CHANGE_EASE = () => {
  document.documentElement.style.setProperty('--ease', SELECT.value)
}

SELECT.addEventListener('change', CHANGE_EASE)

CHANGE_EASE()