let active = localStorage.getItem('active')
const filterToggle = document.getElementById('filterButton')
const list = document.getElementById('list')
const openList = () => {
  list.classList.add('active')

  localStorage.setItem('active', 'enabled')
}

const closeList = () => {
  list.classList.remove('active')

  localStorage.setItem('active', null)
}

if (active === 'enabled') {
  openList()
}

filterToggle.addEventListener('click', () => {
  active = localStorage.getItem('active')
  if (active !== 'enabled') {
    openList()
  } else {
    closeList()
  }
})
