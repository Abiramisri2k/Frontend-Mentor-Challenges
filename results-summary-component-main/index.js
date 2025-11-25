fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const items = document.querySelectorAll(".summary-item");

    items.forEach((item, index) => {
      item.querySelector("img").src = data[index].icon;
      item.querySelector("img").alt = data[index].category + " Icon";
      item.querySelector(".category").textContent = data[index].category;
      item.querySelector(".score").textContent = data[index].score;
    });
  });