const Stats = () => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow w-full mt-10 card border border-base-200">
      <div className="stat">
        <div className="stat-title">Valores a Serem Pagos</div>
        <div className="stat-value">R$ 42.526,62</div>
        <div className="stat-desc">27% do Valor total</div>
      </div>

      <div className="stat">
        <div className="stat-title">Valores Pagos</div>
        <div className="stat-value">R$ 125.040,22</div>
        <div className="stat-desc">73% do Valor Total</div>
      </div>
      <div className="stat">
        <div className="stat-title">Valor Total</div>
        <div className="stat-value text-primary">R$ 167.566,84</div>
        <div className="stat-desc">Valor Total de Contas</div>
      </div>

    <div className="stat">
        <div className="stat-title">Quebra / Sobra</div>
        <div className="stat-value text-success">R$ 167.566,84</div>
      </div>
    </div>
  )
}

export default Stats
