import './index.css'

function classToggle () {
  const navLinks = document.querySelectorAll('.nav-link')
  const dropdownItems = document.querySelectorAll('.dropdown-menu')

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      dropdownItems[i].classList.toggle('hidden')
    })
  }
}

classToggle()
