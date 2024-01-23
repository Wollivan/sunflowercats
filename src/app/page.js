export default function Home() {
  const cats = [
    { name: "Penguin", seeds: "poppy", height: "2ft", cute: true },
    { name: "Chester", seeds: "sesame", height: "8000ft", cute: true },
    { name: "Cooper", seeds: "sycamore", height: "0.4mm", cute: true },
    { name: "Cheeni", seeds: "beet (sugar)", height: "-3ft", cute: true },
    { name: "Tibbles", seeds: "flax", height: "8001ft", cute: true },
    { name: "Jez", seeds: "woe", height: "5ft12in", cute: false },
  ];

  return (
    <div>
      <h2>Home</h2>
      <div className="cats">
        {cats.map((cat) => {
          return (
            <div key={cat.name} className="cat">
              <h3>{cat.name}</h3>
              <p>Produces {cat.seeds} seeds</p>
              <p>{cat.height} tall</p>
              <p>{cat.cute ? "Very cute" : "This one is Jez."}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
