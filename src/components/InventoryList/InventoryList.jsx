const InventoryList = ({ inventory, title, handleAddItem, handleRemoveItem }) => {
  return (
    <div className="inventory-list">
      <h2>{title}</h2>
      <table>
        <tr>
          <th>Item</th>
          <th>Cost</th>
          <th>Weight</th>
          <th>
            {handleAddItem
              ? 'Add'
              : 'Remove'
            }
          </th>
        </tr>
        {inventory.map(item =>
          <tr>
            <td>{item.name}</td>
            <td>${item.cost}</td>
            <td>{item.weight}</td>
            <td>
              {handleAddItem 
                ? <button onClick={() => handleAddItem(item)}>+</button>
                : <button onClick={() => handleRemoveItem(item)}>x</button>
              }

            </td>
          </tr>
        )}
      </table>
    </div>
  )
}

export default InventoryList