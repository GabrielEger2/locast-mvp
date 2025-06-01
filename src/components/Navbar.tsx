import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="flex justify-center fixed top-0 left-0 w-full z-50 bg-base-100 shadow">
      <div className="navbar max-w-[1600px]">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <Image
              src="https://static.wixstatic.com/media/a5c95c_7ac329ac7b444b18a6f8272f91153823~mv2.png"
              alt="Locast Guindastes"
              className="mr-2 h-10 w-10"
              width={40}
              height={40}
            />
            Locast
          </a>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
