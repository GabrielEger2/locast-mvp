import { DayPicker } from 'react-day-picker'

const Filtros = () => {
  return (
    <div className="flex gap-4">
      <div>
        <button
          popoverTarget="rdp-popover1"
          className="input input-border"
          style={{ anchorName: '--rdp1' } as React.CSSProperties}
        >
          Data Inicio
        </button>
        <div
          popover="auto"
          id="rdp-popover1"
          className="dropdown"
          style={{ positionAnchor: '--rdp1' } as React.CSSProperties}
        >
          <DayPicker className="react-day-picker w-full" mode="single" />
        </div>
      </div>
      <div>
        <button
          popoverTarget="rdp-popover2"
          className="input input-border"
          style={{ anchorName: '--rdp2' } as React.CSSProperties}
        >
          Data Fim
        </button>
        <div
          popover="auto"
          id="rdp-popover2"
          className="dropdown"
          style={{ positionAnchor: '--rdp2' } as React.CSSProperties}
        >
          <DayPicker className="react-day-picker w-full" mode="single" />
        </div>
      </div>
    </div>
  )
}

export default Filtros
