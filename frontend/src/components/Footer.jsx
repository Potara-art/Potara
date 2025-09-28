import logo from '../assets/potara-logo.png'

function Footer () 
{
    return (
        <div className="font-unkempt text-beige text-2xl bg-almostblack w-full h-25 flex flex-row place-content-evenly gap-50 place-content-center items-center">
            <p>Made with &lt;3</p>
            <a href="/">
                <img className="max-w-40 h-auto" src={logo} />
            </a>
            <p>© 2025 Potara</p>
        </div>
    )
}

export default Footer