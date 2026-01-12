import { useState } from "react"
import InventoryList from "../../components/InventoryList/InventoryList"
import { inventoryData } from "../../data/data"
import './Shop.css'

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([])

  function handleAddItem(item) {
    setUserInventory([...userInventory, item])
    setShopInventory(shopInventory.filter(el => el._id !== item._id))
  }

  return (
    <main>
      <h1>Shop</h1>
      <section>
        <InventoryList title='Shop Inventory' inventory={shopInventory} handleAddItem={handleAddItem} />
        <InventoryList title='User Inventory' inventory={userInventory}  />
      </section>
    </main>
  )
}

export default Shop