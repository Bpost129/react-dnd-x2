import { useState } from "react"
import InventoryList from "../../components/InventoryList/InventoryList"
import { inventoryData } from "../../data/data"

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([])

  function handleAddItem() {
    const newItem = { _id: 62555, name: 'Magic Wand', cost: 1, weight: 2 }
    const newItemTwo = { _id: 63444, name: 'Scroll', cost: 100, weight: 5 }
    setShopInventory([newItem, newItemTwo, ...shopInventory])
  }

  return (
    <main>
      <h1>Shop</h1>
      <button onClick={handleAddItem}>Click Here</button>
      <InventoryList inventory={shopInventory} />
    </main>
  )
}

export default Shop