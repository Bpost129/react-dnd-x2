const InventoryList = ({ inventory, title }) => {
  return (
    <div className="inventory-list">
      <h2>{title}</h2>
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
    </div>
  )
}

export default InventoryList