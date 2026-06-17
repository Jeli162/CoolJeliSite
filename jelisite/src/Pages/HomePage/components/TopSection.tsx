import "../TopSection_style.css";

const Header = () =>
{
    return <h1 className="top">Jeli's Website</h1>
}

const Body = () =>
{
    return <p className="top">I figured out what to do with this site :D</p>
}


const TopSection = () =>
{
    return <section className="top">
        <Header/>
        <Body/>
    </section>
}

export default TopSection