const InventoryList = ({ inventory }) => {
  return (
    <>
      <h2>Inventory List</h2>
      <table>
        <tr>
          <th>Item</th>
          <th>Cost</th>
          <th>Weight</th>
        </tr>
        {inventory.map(item =>
          <tr>
            <td>{item.name}</td>
            <td>${item.cost}</td>
            <td>{item.weight}</td>
          </tr>
        )}
      </table>
    </>
  )
}

export default InventoryList