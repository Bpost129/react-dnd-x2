import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getMonster } from "../../services/api-calls"

const MonsterDetails = () => {
  const [monsterDetails, setMonsterDetails] = useState({})
  const { monsterId } = useParams()

  useEffect(() => {
    
  }, [])
  
  return (
    <main>
      <h1>Monster Details</h1>
    </main>
  )
}

export default MonsterDetails