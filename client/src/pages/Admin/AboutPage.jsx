import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="flex gap-3">
            <h1>About</h1>
            <Link to="/">Ir a Home</Link>
        </div>
    )
}

export default AboutPage;