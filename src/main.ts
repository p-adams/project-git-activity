import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <article>
      <section>
        <h3>Git Activity Widget</h3>
        <div id="activity-widget"></div>
      </section>
    </article>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
