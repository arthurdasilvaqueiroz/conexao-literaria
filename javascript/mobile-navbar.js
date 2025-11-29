class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, overlay) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.overlay = document.querySelector(overlay);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.overlay.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  closeMenu() {
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
    this.overlay.classList.remove(this.activeClass);
    this.navLinks.forEach((link) => (link.style.animation = ""));
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);

    this.overlay.addEventListener("click", this.closeMenu);
  }

  init() {
    if (this.mobileMenu && this.overlay) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
  ".overlay"
);
mobileNavbar.init();
