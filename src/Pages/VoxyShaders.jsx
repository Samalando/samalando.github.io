import CardShader from "../cardShader.jsx";
import usePersistentToggle from "../font-toggle.js"
import {useState} from "react";

const CardData = [
    {
        Name: "Alpha Piscium",
        Image: "alpha-p.png",
        Author: "Luna5ama",
        Description: "High-quality realistic Minecraft shaderpack featuring global illumination, volumetric clouds, atmospheric scattering, and stunning visual effects.",
        Discord: "https://discord.gg/E2Uq2MmHgq",
        Modrinth: "https://modrinth.com/shader/alpha-piscium",
        Github: "github.com",
        GithubSponsors: "https://github.com/sponsors/Luna5ama"
    },
    {
        Name: "Bliss - Official",
        Image: "bliss_icon.webp",
        Author: "Xonk",
        Description: "A well performing fantasy styled shaderpack.\nNOTE: YOU MUST USE THE GITHUB VERSION FOR VOXY SUPPORT",
        Github: "https://github.com/X0nk/Bliss-Shader/tree/Unstable",
        Modrinth: "https://modrinth.com/shader/bliss-shader",
        Discord: "https://discord.gg/hX8FHkU86r",
        kofi: "https://ko-fi.com/xonkdev"
    },
    {
        Name: "Bloop",
        Image: "bloop_icon.png",
        Author: "Espen96",
        Description: "A shader aimed at maximum speed while maintaining good visuals.\n                     Scalable from low to high end computers.",
        Discord: "https://discord.com/channels/237199950235041794/722973870566670336",
        Modrinth: "https://modrinth.com/shader/bloop-shaders"
    },
    {
        Name: "BSL",
        Image: "bsl_icon.webp",
        Author: "Capttatsu",
        Description: "A bright, colorful, and distinct shader.",
        Modrinth: "https://modrinth.com/shader/bsl-shaders",
        Discord: "https://discord.com/invite/ZJd7jjA",
        Patreon: "https://patreon.com/capttatsu"
    },
    {
        Name: "Complementary Shaders",
        Image: "complementary_icon.webp",
        Author: "EminGT",
        Description: "Reimagining the visuals of Minecraft with high standards of quality, detail and performance.",
        Discord: "https://www.complementary.dev/discord",
        Patreon: "https://complementary.dev/patreon",
        Github: "https://complementary.dev/github",
        special: "complementary_icon.webp",
        specialLink: "https://www.complementary.dev/shaders/"
    },
    {
        Name: "Continuum 2.0 Redux",
        Image: "continuum_graphics.png",
        Author: "Continuum Graphics & Uvraj",
        Description: "Continuum 2.0 Redux is a stylized reimagining / edit of Continuum 2.0.5, created by Uvraj",
        special: "continuum_logo.png",
        specialLink: "https://continuum.graphics/downloads/"
    },
    {
        Name: "Eclipse - A Bliss Edit",
        Image: "eclipse_icon.png",
        Author: "Merlin1809",
        Description: "Bliss, but forked, with some cool & different things!",
        Github: "https://github.com/Merlin1809/Eclipse-Shader",
        Discord: "https://discord.gg/8nVt56H9zH"
    },
    {
        Name: "E-Lite",
        Image: "elite_icon.jpeg",
        Author: "Entokito",
        Description: "A MakeUp - Ultra Fast shaders edit that is highly customizable, beautiful, and fast!",
        Github: "https://github.com/EntokitoDezonze/E-LITE-shaders",
        Modrinth: "https://modrinth.com/shader/lite-shaders",
    },
    {
        Name: "Euphoria Patches",
        Image: "EuphoriaPatchesLogo.webp",
        Author: "SpacEagle17",
        Description: "Euphoria Patches is an add-on for Complementary Shaders, extending it with more optional features and settings.",
        Discord: "https://euphoriapatches.com/discord",
        Github: "https://github.com/EuphoriaPatches/EuphoriaPatcher",
        Patreon: "https://www.patreon.com/SpacEagle17",
        kofi: "https://ko-fi.com/spaceagle17",
        Modrinth: "https://modrinth.com/mod/euphoria-patches",
        special: "euphoria_logo_minimal.webp",
        specialLink: "https://www.euphoriapatches.com/"
    },
    {
        Name: "Glimmer",
        Image: "glimmer_icon.webp",
        Author: "jbritain",
        Description: "Glimmer is a Minecraft shaderpack designed to be simple and performant without looking like it.",
        Github: "https://github.com/jbritain/glimmer-shaders",
        Modrinth: "https://modrinth.com/shader/glimmer-shaders/",
        Discord: "https://discord.com/invite/b9SHNcvs6c",
        kofi: "https://ko-fi.com/jbritain"
    },
    {
        Name: "I like Vanilla",
        Image: "ilv_icon.png",
        Author: "What 42",
        Description: "A vanilla-like shader that improves minecraft's style without replacing it",
        Github: "https://github.com/What42Pizza/I-Like-Vanilla",
        Modrinth: "https://modrinth.com/shader/i-like-vanilla",
        Discord: "https://discord.com/invite/h99ZBex9nZ"
    },
    {
        Name: "Just Colored Lighting",
        Image: "jcl_icon.webp",
        Author: "TimeTravelBeard",
        Description: "Just Colored Lighting and Dynamic Lights added to a very fast shader for Potato computers.",
        Modrinth: "https://modrinth.com/shader/just-colored-lighting",
        Discord: "https://discord.gg/S6F4r6K5yU",
        Patreon: "https://www.patreon.com/timetravelbeard"
    },
    {
        Name: "Lumina",
        Image: "lumina.jpg",
        Author: "Seilotte",
        Description: "A peformance-oriented shader for Minecraft.",
        Github: "https://github.com/seilotte/lumina"
    },
    {
        Name: "Mellow",
        Image: "mellow_icon.webp",
        Author: "TheCMK",
        Description: "Shaderpack with a painterly aesthetic made for people who want to actually play the game",
        codeberg: "https://codeberg.org/TheCMK/mellow-shader/",
        Modrinth: "https://modrinth.com/shader/mellow",
        kofi: "https://ko-fi.com/the_cmk"
    },
    {
        Name: "MakeUp - Ultra Fast",
        Image: "makeup_icon.webp",
        Author: "KDXavier",
        Description: "MakeUp aims to provide the best quality / performance ratio, building a shader that can be adapted to anyone's resources.",
        Github: "https://github.com/javiergcim/MakeUpUltraFast",
        Modrinth: "https://modrinth.com/shader/makeup-ultra-fast-shaders"
    },
    {
        Name: "Noble",
        Image: "Noble_icon.webp",
        Author: "Belmu",
        Description: "Noble finds the perfect balance between performance and realism",
        Github: "https://github.com/BelmuTM/Noble",
        Modrinth: "https://modrinth.com/shader/noble",
        Discord: "https://discord.gg/jjRrhpkH9e",
        Patreon: "https://www.patreon.com/Belmu"
    },
    {
        Name: "Photon",
        Image: "photon_icon.webp",
        Author: "Sixthsurge",
        Description: "A gameplay-focused shaderpack with a semi-realistic style.",
        Github: "https://github.com/sixthsurge/photon",
        Modrinth: "https://modrinth.com/shader/photon-shader",
        Discord: "https://discord.com/invite/ngEW66HScd",
        kofi: "https://ko-fi.com/sixthsurge"
    },
    {
        Name: "Render Pearl",
        Image: "renderpearl.webp",
        Author: "Luracasmus",
        Description: "Clean, high performance shaders for modern hardware",
        Github: "https://github.com/Luracasmus/renderpearl",
        Modrinth: "https://modrinth.com/shader/renderpearl",
        Patreon: "https://www.patreon.com/luracasmus"
    },
    {
        Name: "Revelation",
        Image: "revelation.png",
        Author: "HaringPro",
        Description: "Physically Based, High Performance and Heuristic.\n                     Contact me if this shader is stolen!",
        Github: "https://github.com/HaringPro/Revelation"
    },
    {
        Name: "Reverie",
        Image: "reverie.webp",
        Author: "TheCMK",
        Description: "Shader with a foggy and warm look.\n                     It leverages new features added by Iris for effects previously impossible to achieve.",
        Modrinth: "https://modrinth.com/shader/reverie_shader",
        kofi: "https://ko-fi.com/the_cmk"
    },
    {
        Name: "SEUS PTGI GFME",
        Image: "sundial_logo_temp.jpg",
        Author: "GeForceLegend",
        Description: "A deeply modified version of SEUS PTGI",
        Github: "https://github.com/GeForceLegend/SEUS_PTGI_GFME",

    },
    {
        Name: "Shrimple",
        Image: "shrimple_icon.webp",
        Author: "Null",
        Description: "A simple Minecraft Java shader that attempts to maintain the vanilla aesthetic while adding optional shadows, colored lighting, and ray-tracing.\nNOTE: YOU MUST USE THE GITHUB VERSION FOR VOXY SUPPORT",
        Github: "https://github.com/Null-MC/Shrimple",
        Modrinth: "https://modrinth.com/shader/shrimple",
        Discord: "https://discord.com/invite/E74tMFuuAA",
        Patreon: "https://www.patreon.com/null511"
    },
    {
        Name: "Sildurs Shaders",
        Image: "sildurs.png",
        Author: "Sildur",
        Description: "Sildurs multiple shaders to use",
        Discord: "https://discord.gg/EbsAecrVXg",
        Modrinth: "https://modrinth.com/user/Sildur"
    },
    {
        Name: "Solas",
        Image: "Solas.webp",
        Author: "Septonious",
        Description: "Solas is a fantasy stylized shaderpack aiming to provide stunning visuals at a moderate performance cost.",
        Github: "https://github.com/Septonious/Solas-Shader",
        Modrinth: "https://modrinth.com/shader/solas-shader/",
        Discord: "https://discord.gg/HEw9DbQwuM",
        boosty: "https://boosty.to/septonious"
    },
    {
        Name: "Spring Shaders",
        Image: "spring.webp",
        Author: "Chun/ZY-PANDA",
        Description: "A fresh and clear shader pack themed around spring.",
        Github: "https://github.com/gjshiwoa/spring-shaders",
        ifdian: "https://ifdian.net/a/zypanda"
    },
    {
        Name: "Sundial Lite",
        Image: "sundial_logo_temp.jpg",
        Author: "GeForceLegend",
        Description: "Sundial is a fast and fancy shader.",
        Github: "https://github.com/GeForceLegend/Sundial-Lite",
        ifdian: "https://afdian.com/a/geforcelegend"
    },
    {
        Name: "Steadfast",
        Image: "steadfast.jpeg",
        Author: "coderbot16",
        Description: "A remarkably fast and unobtrusive shaderpack with exceptional attention-to-detail",
        Modrinth: "https://modrinth.com/shader/steadfast-shaders",
        Github: "https://github.com/coderbot16/Steadfast",
        Patreon: "https://www.patreon.com/coderbot"
    }
];

export default function VoxyShaders() {
    const [darkEnabled, setDarkEnabled] = usePersistentToggle('dark-mode')
    const [dyslexicEnabled, setDyslexicEnabled] = usePersistentToggle('dyslexic-mode')
    const [sortOrder, setSortOrder] = useState(localStorage.getItem('sortOrder') ?? 'abc')

    const sortedCards = [...CardData].sort((a, b) => {
        const customOrder = ['Photon', 'Shrimple', 'Glimmer', 'Eclipse - A Bliss Edit', 'Sundial Lite', 'Bliss - Official', 'I like Vanilla', 'BSL', 'Continuum 2.0 Redux', 'Solas', 'Noble', 'Bloop', 'Just Colored Lighting', 'Spring Shaders', 'Mellow', 'Alpha Piscium', 'Render Pearl', 'Revelation', 'Lumina', 'Reverie', 'MakeUp - Ultra Fast', 'Steadfast', 'Complementary Shaders', 'Euphoria Patches',  'Sildurs Shaders', 'E-Lite', 'SEUS PTGI GFME' ];
        const titleA = a.Name.trim();
        const titleB = b.Name.trim();

        const indexA = customOrder.indexOf(titleA);
        const indexB = customOrder.indexOf(titleB);

        if (sortOrder === 'old') {
            return indexA - indexB;
        } else if (sortOrder === 'new') {
            return indexB - indexA;
        } else if (sortOrder === 'zyx'){
          return b.Name.localeCompare(a.Name);
        } else if (sortOrder === 'abc'){
            return a.Name.localeCompare(b.Name);
        }

    });

    return (
        <>
            <div className="content">
                <div className="row">
            <div className="sorting">
                <select value={sortOrder} onChange={(e) => {
                    setSortOrder(e.target.value);
                    localStorage.setItem('sortOrder', e.target.value);
                }}>
                    <option value="abc" selected>ABC</option>
                    <option value="zyx">ABC (Reversed)</option>
                    <option value="old">Oldest(top)</option>
                    <option value="new">Newest(top)</option>
                </select>
            </div>
                <br />
                <div className="font-selector">
                    <button onClick={() => setDyslexicEnabled(!dyslexicEnabled)}>
                        <h3 className="font-selector"> Dyslexic Mode</h3>
                    </button>
                </div>
                <div className="dark-mode-btn">
                    <button onClick={() => setDarkEnabled(!darkEnabled)}>
                        <svg width="20px" height="20px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">

                            <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"/>
                            <path
                                d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"/>

                        </svg>
                    </button>


                </div>
                </div>
                <div className="all-cards">
                    {sortedCards.map(card => (
                        <CardShader key={card.Name} {...card} />
                    ))}
                </div>
                <br/>
                <footer>
                    <p> Samalando 2026, All Rights Reserved. <br/> license of shaders is dependent on the pack and may
                        not
                        be ARR </p>
                    <div className="footer-contact">
                        <a href="/contacts.html"> Contact me</a>
                    </div>
                    <div className="footer-kofi">
                        <a href="https://ko-fi.com/samalando"> Le Tip Jar</a>

                    </div>
                </footer>
                </div>
            </>

            )
}
