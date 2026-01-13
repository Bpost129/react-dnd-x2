const baseUrl = 'https://sei-dnd-api.herokuapp.com'

export async function getMonsterList() {
  const res = await fetch(`${baseUrl}/api/monsters`)
  return res.json()
}