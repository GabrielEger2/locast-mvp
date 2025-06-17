import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface SubOption {
  href: string
  title: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const CollapsibleOption = ({
  baseHref,
  title,
  Icon,
  subOptions,
}: {
  baseHref: string
  title: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  subOptions: SubOption[]
}) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(pathname.startsWith(baseHref))

  const toggle = () => setOpen(!open)

  return (
    <div className="collapse collapse-arrow m-0">
      <input
        type="checkbox"
        className="peer"
        checked={open}
        onChange={toggle}
      />
      <div className="collapse-title flex">
        <div className="grid h-full mr-4 ml-1 place-content-center text-lg">
          <Icon />
        </div>
        <span className="text-xs font-medium">{title}</span>
      </div>
      <div className="collapse-content">
        {subOptions.map(({ href, title, icon: SubIcon }) => {
          const isActive = pathname === href
          return (
            <Link href={href} key={href}>
              <button
                className={`btn btn-ghost w-full justify-start ${
                  isActive ? 'btn-active' : ''
                }`}
              >
                {SubIcon && <SubIcon className="mr-4" />}
                <span className="">{title}</span>
              </button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CollapsibleOption
