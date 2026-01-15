import { useState } from "react"

import SearchForm from "../../components/SearchForm/SearchForm"

const SpellSearch = () => {
  const [allSpells, setAllSpells] = useState([])
  
  return (
    <main className="spell-list">
      <h1>Spell Search</h1>
      <SearchForm />
    </main>
  )
}

export default SpellSearch