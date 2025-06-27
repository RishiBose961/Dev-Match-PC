import GoLiveCreate from "@/components/GoLiveComp/GoLiveCreate"
import GoLiveInfo from "@/components/GoLiveComp/GoLiveInfo"

const GoLive = () => {
  return (
    <div className="p-2">
        <h1 className="text-2xl font-bold mb-4">Go Live</h1>
    
        <GoLiveCreate/>
        <div className="my-4">
            <hr className="border-gray-200 mb-4" />
          <h2 className="text-lg font-semibold">Live Sessions</h2>
          <p className="text-sm text-gray-500">Manage your live sessions here.</p>
        </div>
        <GoLiveInfo/>
    </div>
  )
}

export default GoLive