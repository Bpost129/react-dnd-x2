import { useState } from "react"
import InventoryList from "../../components/InventoryList/InventoryList"
import { inventoryData } from "../../data/data"

const Shop = () => {
  const [inventory, setInventory] = useState(inventoryData)

  function handleAddItem() {
    const newItem = { _id: 62555, name: 'Magic Wand', cost: 1, weight: 2 }
    setInventory([newItem])
  }

  return (
    <main>
      <h1>Shop</h1>
      <button onClick={handleAddItem}>Click Here</button>
      <InventoryList inventory={inventory} />
    </main>
  )
}

export default Shop