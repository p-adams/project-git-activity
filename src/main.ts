import "./style.css";

function Tiles(el: HTMLElement) {
  function render() {
    const tileMatrix = new Array(7).fill(0).map(() => new Array(52).fill(0));
    for (const col of tileMatrix) {
      for (const _ of col) {
        const tileWrapper = document.createElement("div");
        tileWrapper.setAttribute("class", "tile-wrapper");
        const tile = document.createElement("div");
        tile.setAttribute("class", "tile");
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
