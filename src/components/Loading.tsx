import { GridLoader } from "react-spinners"

const Loading: React.FC = () => {
  return (
    <div className="loading-wrapper">
      <GridLoader
        className="spinner"
        color="#660f27"
        size={45}
        speedMultiplier={0.8} />
    </div>
  )
}

export default Loading
