let homeTimer: number | undefined

// Cards drop in once on load. The optic focus is a hover/focus state only; nothing is pre-selected.
function initQSHome() {
  window.clearTimeout(homeTimer)
  const home = document.getElementById("qs-home")
  if (!home) return
  home.classList.remove("qs-enter")
  void home.offsetWidth
  home.classList.add("qs-enter")
  homeTimer = window.setTimeout(() => home.classList.remove("qs-enter"), 3053)
}

document.addEventListener("nav", initQSHome)

export {}
