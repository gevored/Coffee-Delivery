import Coffe from '../../assets/Images/CoffeImage.png'

import IconCoffeFastDelivery from '../../assets/Images/IconCoffeFastDelivery.png'
import IconCoffeFreshDelivery from '../../assets/Images/IconCoffeFreshDelivery.png'
import IconCoffePackage from '../../assets/Images/IconCoffePackage.png'
import IconCoffeShopSimpleSafe from '../../assets/Images/IconCoffeShopSimpleSafe.svg'
import { theme } from '../../styles/colors'
import {
  IntroContainer,
  MainContent,
  BackgroundIcon,
  IconsContainer,
  TitleContent,
} from './styles'
export function Intro() {
  return (
    <IntroContainer>
      <div>
        <MainContent>
          <TitleContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </TitleContent>
          <IconsContainer>
            <div>
              <div>
                <BackgroundIcon bgColor={theme['orange-400']}>
                  <img src={IconCoffeShopSimpleSafe} alt="" />{' '}
                </BackgroundIcon>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <BackgroundIcon bgColor={theme['yellow-400']}>
                  <img src={IconCoffeFastDelivery} alt="" />{' '}
                </BackgroundIcon>
                <p>Entrega rápida e rastreada</p>
              </div>
            </div>
            <div>
              <div>
                <BackgroundIcon bgColor={theme['brown-400']}>
                  <img src={IconCoffePackage} alt="" />{' '}
                </BackgroundIcon>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div>
                <BackgroundIcon bgColor={theme['purple-400']}>
                  <img src={IconCoffeFreshDelivery} alt="" />{' '}
                </BackgroundIcon>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </IconsContainer>
        </MainContent>

        <aside>
          <img src={Coffe} alt="image of Coffe" />
        </aside>
      </div>
    </IntroContainer>
  )
}
