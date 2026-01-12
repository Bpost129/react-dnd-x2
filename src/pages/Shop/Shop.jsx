import { useState } from "react"
import InventoryList from "../../components/InventoryList/InventoryList"
import { inventoryData } from "../../data/data"
import './Shop.css'

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([])

  function handleAddItem() {
    
  }

  return (
    <main>
      <h1>Shop</h1>
      <section>
        <InventoryList inventory={shopInventory} title='Shop Inventory' />
        <InventoryList inventory={userInventory} title='User Inventory' />
      </section>
    </main>
  )
}

export default Shop