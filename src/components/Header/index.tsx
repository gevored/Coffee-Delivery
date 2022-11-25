import { HeaderContainer, SideHeaderMenu } from './styles'
import Logo from '../../assets/Images/Logo.svg'
import Cart from '../../assets/Images/Cart.svg'
import Point from '../../assets/Images/point.png'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        <SideHeaderMenu>
          <span>
            <img src={Point} alt="" />
            <h1>Porto Alegre, RS</h1>
          </span>
          <a href="/checkout">
            <img src={Cart} alt="" />
          </a>
        </SideHeaderMenu>
      </div>
    </HeaderContainer>
  )
}
