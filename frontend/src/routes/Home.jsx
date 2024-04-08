import { Link } from "react-router-dom"
import Homepage from "../components/homepage/Homepage"

const Home = () => {
  return (
    <div>
      <Homepage />
        <Link to={"/documents"}>See previously uploaded PDFs</Link>
        <Link to="/upload">Upload new PDF</Link>
    </div>
  )
}
export default Home