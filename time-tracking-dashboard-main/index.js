const links = document.querySelectorAll(".link");
const cards = document.querySelectorAll(".card");

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    cards.forEach((card, index) => {
      const title = card.querySelector(".title");
      const hours = card.querySelector(".hours");
      const status = card.querySelector(".status");
      
      title.textContent = data[index].title;
      hours.textContent = data[index].timeframes.weekly.current + "hrs";
      status.textContent = "Last week - " + data[index].timeframes.weekly.previous + "hrs";

      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const timeframe = link.getAttribute("data-timeframe"); // Fixed: added quotes
          
          hours.textContent = data[index].timeframes[timeframe].current + "hrs";
          
          // Fixed: better logic for timeframe names
          let periodName;
          if (timeframe === "daily") periodName = "day";
          else if (timeframe === "weekly") periodName = "week";
          else if (timeframe === "monthly") periodName = "month";

          status.textContent = "Last " + periodName + " - " + data[index].timeframes[timeframe].previous + "hrs";
          
          // Update active state
          links.forEach((link) => link.classList.remove("activated"));
          link.classList.add("activated");
        });
      });
    });
  })
  .catch((err) => console.error(err));