



const allItems = document.querySelectorAll(".accordion-item");

allItems.forEach((toBeOpenItem, index1) => {
  const accordion_header = toBeOpenItem.querySelector("h2");
  const arrow = accordion_header.querySelector("i");
  accordion_header.addEventListener("click", () => {
    accordion_header.classList.toggle("active");
    let tobeDisplayContent = toBeOpenItem.querySelector(".accordion-body");

    if (
      !tobeDisplayContent.style.display ||
      tobeDisplayContent.style.display === "none"
    ) {
      tobeDisplayContent.style.display = "block";

      arrow.classList.remove("fa-angle-down");
      arrow.classList.add("fa-angle-up");
    } else {
      tobeDisplayContent.style.display = "none";
      arrow.classList.remove("fa-angle-up");
      arrow.classList.add("fa-angle-down");
    }
    allItems.forEach((toBeCloseItem, index2) => {
      if (index1 !== index2) {
        let tobeCloseContent = toBeCloseItem.querySelector(".accordion-body");
        let accordion_header1 = toBeCloseItem.querySelector("h2")
        let arrow1 = toBeCloseItem.querySelector("i");

        tobeCloseContent.style.display = "none";
        if (!arrow1.classList.contains("fa-angle-down")) {
           accordion_header1.classList.remove("active");
          arrow1.classList.remove("fa-angle-up");
          arrow1.classList.add("fa-angle-down");
        }
      }
    });
  });
});
