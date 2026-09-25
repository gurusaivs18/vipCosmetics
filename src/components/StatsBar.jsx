import '../css/StatsBar.css';

const stats = [
  { value: '150+', label: 'Retail Doors' },
  { value: '1,200+', label: 'SKUs Managed' },
  { value: 'UAE', label: 'Markets' },
  { value: '98%', label: 'On-Time Fill Rate' },
];

function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;