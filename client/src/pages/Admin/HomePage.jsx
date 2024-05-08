import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex gap-3">
      <h1>HOME</h1>
      <Link to="/about">Ir a About</Link>
    </div>
  )
}

export default HomePage;