const Stats = () => {
  return (
<div className="stats stats-vertical lg:stats-horizontal shadow w-full mt-10 card border border-base-200">
        <div className="stat">
          <div className="stat-title">Total de Entradas</div>
          <div className="stat-value text-success">R$ 124.526,62</div>
          <div className="stat-desc">21% a mais que mes passado</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total de Saidas</div>
          <div className="stat-value text-error">R$ 57.000,00</div>
          <div className="stat-desc">26% a menos que mes passado</div>
        </div>
        <div className="stat">
          <div className="stat-title">Numero de Pedidos</div>
          <div className="stat-value text-primary">152</div>
          <div className="stat-desc">15% a mais que mes passado</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://colaboradores.grupomundialmix.com.br/assets/icon-e0b1fde7.png" />
              </div>
            </div>
          </div>
          <div className="stat-value">MundialMix</div>
          <div className="stat-title">Principal Cliente</div>
          <div className="stat-desc text-secondary">31 Pedidos no ultimo mes</div>
        </div>
      </div>
  )
}

export default Stats