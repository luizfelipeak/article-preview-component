const shareBtn = document.getElementById("share-btn");

shareBtn.addEventListener("click", () => {
  if(shareBtn.getAttribute("aria-expanded") === "false")
    shareBtn.setAttribute("aria-expanded", "true");
  else
    shareBtn.setAttribute("aria-expanded", "false");
});