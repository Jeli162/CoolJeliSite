import { useNavigate } from "react-router-dom"
import "./style.css"

const GoHomeButton = () =>
{
    const navigate = useNavigate();

    function handleClick()
    {
        navigate("/");
    }

    return <button onClick={handleClick}>Home</button>
}

const TestPage = () =>
{
    return <section className="test">
        <h1>HI</h1>
        <GoHomeButton/>
    </section>
}

export default TestPage;