import { inventoryData } from "../../data/data"


const Shop = () => {
  console.log('Inventory data:', inventoryData)

  return (
    <main>
      <h1>Shop</h1>
      <table>
        <tr>
          <th>Item</th>
          <th>Cost</th>
          <th>Weight</th>
        </tr>
        {inventoryData.map(item =>
          <tr>
            <td>{item.name}</td>
            <td>${item.cost}</td>
            <td>{item.weight}</td>
          </tr>
        )}
      </table>
    </main>
  )
}

export default Shop