const StatsReceber = () => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow w-full mt-10 card border border-base-200">
      <div className="stat">
        <div className="stat-title">Valores a Receber</div>
        <div className="stat-value">R$ 72.342,81</div>
        <div className="stat-desc">35% do Valor total</div>
      </div>

      <div className="stat">
        <div className="stat-title">Valores Recebidos</div>
        <div className="stat-value">R$ 125.240,36</div>
        <div className="stat-desc">65% do Valor Total</div>
      </div>
      <div className="stat">
        <div className="stat-title">Valor Total</div>
        <div className="stat-value text-primary">R$ 197.583,17</div>
        <div className="stat-desc">Valor Total de Contas</div>
      </div>

      <div className="stat">
        <div className="stat-title">Quebra / Sobra</div>
        <div className="stat-value text-success">R$ 167.566,84</div>
      </div>
    </div>
  )
}

export default StatsReceber
