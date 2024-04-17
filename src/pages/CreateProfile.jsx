import { useParams } from "react-router-dom"

export default function CreateProfile() {

  const { userType } = useParams()

  return (
    <div className="bg-[#F2F2F2] h-full">
      {userType}
    </div>
  )
}
