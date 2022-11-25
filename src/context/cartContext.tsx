import { createContext, ReactNode, useState, useEffect } from 'react'
import axios from 'axios'
interface ItemCoffeeProps {
  id: string
  name: string
  price: number
  description: string
  classification: string[]
}

interface CoffeSelectedProps extends ItemCoffeeProps {
  qtd?: number
}

interface CaffeContextProps {
  initialListCaffes?: CoffeSelectedProps[]
  selectedListCaffes?: CoffeSelectedProps[]
  modifyCoffeeSelected: (
    qtd: number,
    CoffeeSelected: CoffeSelectedProps
  ) => void
}
interface ContextCaffeProps {
  children: ReactNode
}
export const CreateContextCaffe = createContext<CaffeContextProps>({
  modifyCoffeeSelected: () => {},
})

export function ContextCaffe({ children }: ContextCaffeProps) {
  const listCoffeesSelectedStorage = JSON.parse(
    localStorage.getItem('@coffe-delivery-1.0/listCoffeesSelected')!
  ) as CoffeSelectedProps[]

  const initialListCoffeesStorage = JSON.parse(
    localStorage.getItem('@coffe-delivery-1.0/initialListCoffees')!
  ) as CoffeSelectedProps[]

  const [listCaffes, setListCaffes] = useState<CoffeSelectedProps[]>(
    initialListCoffeesStorage || []
  )
  const [listCaffesSelected, setListCaffesSelected] = useState<
    CoffeSelectedProps[]
  >(listCoffeesSelectedStorage || [])

  function InsertSelectedCoffeesToLocalStorage(auxArray: CoffeSelectedProps[]) {
    setListCaffesSelected(auxArray)
    localStorage.setItem(
      '@coffe-delivery-1.0/listCoffeesSelected',
      JSON.stringify(auxArray)
    )
  }

  function UpdateListCoffees(id: string, qtd: number) {
    const newArray = listCaffes.map((item) => {
      if (item.id === id) {
        const newItem = item
        newItem.qtd = qtd
        return newItem
      }
      return item
    })

    setListCaffes(newArray)
    localStorage.setItem(
      '@coffe-delivery-1.0/initialListCoffees',
      JSON.stringify(newArray)
    )
  }

  console.log('itens já selecionados : ', listCaffesSelected.length)
  // console.log(listCaffes)
  function SelectCoffee(
    numberOfCafes: number,
    CoffeeSelected: CoffeSelectedProps
  ) {
    const newArray: CoffeSelectedProps[] = []

    if (listCaffesSelected.length === 0) {
      console.log('priemrio item selecionado')
      CoffeeSelected.qtd = numberOfCafes
      newArray.push(CoffeeSelected)
      InsertSelectedCoffeesToLocalStorage(newArray)
      UpdateListCoffees(CoffeeSelected.id, numberOfCafes)
      return
    }
    let auxArray = [...listCaffesSelected]
    let itemAux = auxArray.find((item) => item.id === CoffeeSelected.id)

    if (itemAux) {
      console.log('Item já existe: ', itemAux.name)

      if (numberOfCafes === 0) {
        // procedimento de exclusão
        auxArray = auxArray.filter((item) => item.id !== itemAux?.id)
        InsertSelectedCoffeesToLocalStorage(auxArray)
        UpdateListCoffees(CoffeeSelected.id, numberOfCafes)
        return
      }
      itemAux.qtd = numberOfCafes
      InsertSelectedCoffeesToLocalStorage(auxArray)
      UpdateListCoffees(CoffeeSelected.id, numberOfCafes)
    } else {
      // caso onde o item selecionado é novo
      console.log('novo item selecionado: ', CoffeeSelected.name)
      itemAux = { ...CoffeeSelected }
      itemAux.qtd = numberOfCafes
      auxArray.push(itemAux)
      InsertSelectedCoffeesToLocalStorage(auxArray)
      UpdateListCoffees(CoffeeSelected.id, numberOfCafes)
    }
  }
  useEffect(() => {
    if (!initialListCoffeesStorage) {
      console.log('entrou no useEffect do context')
      const fetchData = async () => {
        const { data } = await axios.get<ItemCoffeeProps[]>(
          'http://localhost:3000/type_cafes'
        )
        setListCaffes(data)
        localStorage.setItem(
          '@coffe-delivery-1.0/initialListCoffees',
          JSON.stringify(data)
        )
      }
      fetchData()
    }
  }, [])

  return (
    <CreateContextCaffe.Provider
      value={{
        initialListCaffes: listCaffes,
        modifyCoffeeSelected: SelectCoffee,
        selectedListCaffes: listCaffesSelected,
      }}
    >
      {children}
    </CreateContextCaffe.Provider>
  )
}
