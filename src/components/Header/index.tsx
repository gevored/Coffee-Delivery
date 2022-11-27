import { HeaderContainer, SideHeaderMenu } from './styles'
import Logo from '../../assets/Images/Logo.svg'
import Cart from '../../assets/Images/Cart.svg'
import Point from '../../assets/Images/point.png'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <SideHeaderMenu>
          <span>
            <img src={Point} alt="" />
            <h1>Porto Alegre, RS</h1>
          </span>
          <Link to="/checkout">
            <img src={Cart} alt="" />
          </Link>
        </SideHeaderMenu>
      </div>
    </HeaderContainer>
  )
}
