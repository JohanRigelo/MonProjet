import { useParams } from "react-router-dom"

export default function AnnonceDetails() {
  const { id } = useParams()

  return (
    <div>
      <h1 className="text-2xl font-bold">Détail annonce</h1>
      <p>ID : {id}</p>
    </div>
  )
}