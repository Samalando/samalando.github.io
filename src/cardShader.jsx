import './card.css'


export default function CardShader({Name, Image, Author, Description, Patreon, Github, Modrinth, Discord, boosty, codeberg, GithubSponsors, kofi, ifdian, special, specialLink}) {
    return (
        <div className="card">
                <div className="card-img">
                    <img src={`../imgs/${Image}`} alt="shader logo" style={{width: "96px", height: "96px"}} />
                </div>
                <div className="card-all-text">
                <div className="card-title">
                    <h1>{Name}</h1>
                </div>
                <div className="card-title">
                    <h3>Author: {Author}</h3>
                </div>
                <div className="card-text">
                    <p>{Description}</p>
                </div>
                <div className="card-logos">
                    {boosty && <a href={boosty} className="button-icons" target="_blank">
                        <img src="/svgs/boosty.svg" alt="boosty" />
                    </a>}
                    {codeberg && <a href={codeberg} className="button-icons" target="_blank">
                        <img src="/svgs/codeberg.svg" alt="codeberg" />
                    </a>}
                    {Discord && <a href={Discord} className="button-icons" target="_blank">
                       <img src="/svgs/discord.svg" alt="discord" />
                    </a>}
                    {Github && <a href={Github} className="button-icons" target="_blank">
                        <img src="/svgs/github.svg" alt="github" />
                    </a>}
                    {GithubSponsors && <a href={GithubSponsors} className="button-icons" target="_blank">
                        <img src="/svgs/github-sponsors.svg" alt="githubSponsors" />
                    </a>}
                    {ifdian && <a href={ifdian} className="button-icons" target="_blank">
                        <img src="/svgs/afdian.svg" alt="ifdian" />
                    </a>}
                    {kofi && <a href={kofi} className="button-icons" target="_blank">
                        <img src="/svgs/kofi.svg" alt="kofi" />
                    </a>}
                    {Modrinth && <a href={Modrinth} className="button-icons" target="_blank">
                        <img src="/svgs/modrinth.svg" alt="modrinth" />
                    </a>}
                    {Patreon && <a href={Patreon} className="button-icons" target="_blank">
                        <img src="/svgs/patreon.svg" alt="patreon" />
                    </a>}

                    {specialLink && <a href={specialLink} className="button-icons" target="_blank">
                    <img src={`/imgs/${special}`} alt="logo" />
                    </a>}
                </div>
                </div>

        </div>
    )
}