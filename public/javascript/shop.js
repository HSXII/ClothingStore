const lists = document.querySelectorAll('.filter-list')
document.getElementById('filterButton').onclick = function () {
  for (list of lists) {
    list.classList.toggle('active')
  }
}
