const Wave = () =>
{
    return <div id="wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path
                    d="M0,64 C240,120 480,0 720,64 C960,120 1200,0 1440,64 L1440,120 L0,120 Z">
                </path>
            </svg>
        </div>
}

const TestButton = () =>
{
    function handleClick()
    {
        console.log("Boo!");
    }

    return <button onClick={handleClick}>Projects</button>
}

const BottomSection = () =>
{
    return <section id="bottom">
        <Wave/>
        <p id="teehee">:3</p>
        <TestButton/>
    </section>
}

export default BottomSection;