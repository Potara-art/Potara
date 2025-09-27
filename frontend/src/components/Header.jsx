import potaraLogo from '../assets/potaraLogo.png'


function Header() {
    return (
        <>
            <a href="/">
                <img className="min-w-30 max-w-50 m-0 absolute top-5 left-5" src={potaraLogo} alt="Potara Logo" />
            </a>
        </>
    )
}

export default Header