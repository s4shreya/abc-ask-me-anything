import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>Home
        <Link to={"/documents"}>See previously uploaded PDFs</Link>
        <Link to="/upload">Upload new PDF</Link>
    </div>
  )
}
export default Home