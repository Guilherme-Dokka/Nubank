function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 50) nav.classList.add("active-header");
  else nav.classList.remove("active-header");
}

window.addEventListener("scroll", scrollHeader);

const dropdownMenu1 = document.getElementById("dropdown-item-1");
const dropdownMenu2 = document.getElementById("dropdown-item-2");
const dropdownMenu3 = document.getElementById("dropdown-item-3");

const menuItem1 = document.getElementById("menu-item-1");
const menuItem2 = document.getElementById("menu-item-2");
const menuItem3 = document.getElementById("menu-item-3");

function ShowDropDown1(event) {
  event.preventDefault();
  dropdownMenu1.classList.toggle("active-dropdown-menu");
  dropdownMenu2.classList.remove("active-dropdown-menu");
  dropdownMenu3.classList.remove("active-dropdown-menu");
}

function ShowDropDown2(event) {
  event.preventDefault();
  dropdownMenu1.classList.remove("active-dropdown-menu");
  dropdownMenu2.classList.toggle("active-dropdown-menu");
  dropdownMenu3.classList.remove("active-dropdown-menu");
}

function ShowDropDown3(event) {
  event.preventDefault();
  dropdownMenu1.classList.remove("active-dropdown-menu");
  dropdownMenu2.classList.remove("active-dropdown-menu");
  dropdownMenu3.classList.toggle("active-dropdown-menu");
}

function removeDropDown() {
  dropdownMenu1.classList.remove("active-dropdown-menu");
  dropdownMenu2.classList.remove("active-dropdown-menu");
  dropdownMenu3.classList.remove("active-dropdown-menu");
}

menuItem1.addEventListener("click", ShowDropDown1);
menuItem2.addEventListener("click", ShowDropDown2);
menuItem3.addEventListener("click", ShowDropDown3);

dropdownMenu1.addEventListener("mouseleave", removeDropDown);
dropdownMenu2.addEventListener("mouseleave", removeDropDown);
dropdownMenu3.addEventListener("mouseleave", removeDropDown);

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active-menu-mobile");
      toggle.classList.toggle("active-bx");
    });
  }
};

showMenu('bx', 'menu-mobile')
