import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft } from 'react-icons/fa'
import Logo from "./Logo"
import { useDashboardContext } from "../pages/DashBoardLayout"
import LogoutContainer from "./LogoutContainer"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext()
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar