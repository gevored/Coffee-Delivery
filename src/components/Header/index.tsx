import { HeaderContainer, SideHeaderMenu } from './styles'
import Logo from '../../assets/Images/Logo.svg'
import Cart from '../../assets/Images/Cart.svg'
import Point from '../../assets/Images/point.png'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />
        <SideHeaderMenu>
          <span>
            <img src={Point} alt="" />
            <h1>Porto Alegre, RS</h1>
          </span>
          <img src={Cart} alt="" />
        </SideHeaderMenu>
      </div>
    </HeaderContainer>
  )
}
