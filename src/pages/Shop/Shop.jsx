import { inventoryData } from "../../data/data"


const Shop = () => {
  console.log('Inventory data:', inventoryData)

  return (
    <main>
      <h1>Shop</h1>
      <ul>
        {inventoryData.map(item =>
          <li>Item: {item.name} <span>Weight: {item.weight}</span></li>
        )}
      </ul>
    </main>
  )
}

export default Shop