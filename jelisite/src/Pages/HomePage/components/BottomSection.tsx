import "../BottomSection_style.css";

const Wave = () =>
{
    return <div id="wave" className="bottom">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path
                    d="M 0.00,47.00            C 0.28,46.91 70.00,-4.00 118.00,17.00              166.00,38.00 229.89,37.46 270.00,28.00              359.00,7.00 418.00,82.00 526.00,33.00              634.00,-16.00 716.00,70.00 789.00,22.00              862.00,-26.00 934.85,86.96 1049.00,43.00              1210.00,-19.00 1215.00,46.00 1300.00,66.00              1385.00,86.00 1380.00,-3.00 1491.00,40.00              1602.00,83.00 1644.00,68.00 1718.00,44.00              1792.00,20.00 1914.00,62.00 1918.00,75.00              1922.00,88.00 1919.00,181.00 1919.00,181.00              1919.00,181.00 -3.00,187.00 -3.00,187.00">
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

    return <button className="bottom" onClick={handleClick}>Projects</button>
}

const BottomSection = () =>
{
    return <section className="bottom">
        <Wave/>
        <p className="bottom">:3</p>
        <TestButton/>
    </section>
}

export default BottomSection;