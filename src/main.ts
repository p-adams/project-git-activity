import "./style.css";

export const levels: { [key: number]: any } = {
  0: "#ebedf0",
  1: "#9be9a8",
  2: "#40c463",
  3: "#30a14e",
  4: "#216e39",
};

function Tiles(el: HTMLElement) {
  function render() {
    const tileMatrix = new Array(7)
      .fill(0)
      .map((_) =>
        new Array(52).fill(0).map((_) => Math.floor(Math.random() * 5))
      );
    for (const row of tileMatrix) {
      for (const value of row) {
        const tileWrapper = document.createElement("div");
        tileWrapper.setAttribute("class", "tile-wrapper");
        const tile = document.createElement("div");
        tile.setAttribute("class", "tile");
        tile.style.backgroundColor = levels[value];
        tileWrapper.appendChild(tile);
        el?.appendChild(tileWrapper);
      }
    }
  }
  return { render };
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <article>
      <section>
        <h3>Git Activity Widget</h3>
        <div id="activity-widget">
        </div>
      </section>
    </article>
  </div>
`;

Tiles(document.querySelector<HTMLDivElement>("#activity-widget")!).render();
