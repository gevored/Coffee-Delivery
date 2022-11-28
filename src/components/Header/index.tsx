import { HeaderContainer, SideHeaderMenu, SpanCart, BoxCart } from './styles'
import Logo from '../../assets/Images/Logo.svg'
import Cart from '../../assets/Images/Cart.svg'
import Point from '../../assets/Images/point.png'
import { Link } from 'react-router-dom'
import { CreateContextCaffe } from '../../context/cartContext'
import { useContext } from 'react'

export function Header() {
  const { selectedListCaffes } = useContext(CreateContextCaffe)

  const countItens = selectedListCaffes?.reduce(
    (partialSum, obj) => partialSum + obj.qtd!,
    0
  )

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
            <BoxCart>
              <img src={Cart} alt="" />
              <SpanCart>{countItens}</SpanCart>
            </BoxCart>
          </Link>
        </SideHeaderMenu>
      </div>
    </HeaderContainer>
  )
}
