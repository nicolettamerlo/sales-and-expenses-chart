import { cloudyGray, sharkGray } from "./utilities";
import { data } from "./data";

export const legendPlugin = {
    afterUpdate(chart) {
      const items = chart.options.plugins.legend.labels.generateLabels(chart);
      const legend = document.getElementById("chartLegend");
      // Remove old legend items
      while (legend.firstChild) {
        legend.firstChild.remove();
      }
      // Create legend items
      items.map((item, index) => {
        const li = document.createElement("li");
        li.classList.add("legend-item");
        li.onclick = (e) => {
          chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
          chart.update();
        };
        const box = document.createElement("div");
        box.classList.add("legend-item-box");
        const legendShape = data.datasets[item.datasetIndex].pointStyle;        
        typeof(legendShape) !== 'string' ? box.classList.add("rect") : box.classList.add(legendShape);
        if (item.hidden) {
          box.style.background = cloudyGray;
          box.style.borderColor = sharkGray;
          box.style.setProperty("--hoverColor", sharkGray);
        } else {
          box.style.background = item.fillStyle;
          box.style.borderColor = item.strokeStyle;
          box.style.setProperty(
            "--hoverColor",
            data.datasets[index].hoverBackgroundColor
          );
        }
        // legend item label
        const label = document.createElement("p");
        label.classList.add("legend-item-label");
        label.style.textDecoration = item.hidden ? "line-through" : "none";
        const text = document.createTextNode(item.text);
        label.appendChild(text);
        li.appendChild(box);
        li.appendChild(label);
        legend.appendChild(li);
      });
    }
};