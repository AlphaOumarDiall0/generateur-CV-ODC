import { Link } from "react-router-dom"
function Accueil() {
  return <>
    <header className = "header bg-bright" id = "header">
        <div className = "container">
            <div className = "header-content text-center">
                <h6 className = "text-uppercase text-blue-dark fs-14 fw-6 ls-1">Générateur de CV en ligne</h6>
                <h1 className = "lg-title">Seulement 2% des CV se démarquent dès le premier coup d`&apos;`œil. Votre CV mérite d`&apos;`être dans ce petit pourcentage.</h1>
                <p className = "text-dark fs-18">Optez pour des modèles de CV professionnels qui respectent scrupuleusement les règles attendues par les employeurs. Faciles à utiliser et conçus en quelques minutes seulement. Essayez dès maintenant, gratuitement !</p>
                <Link to={'/form'} className = "btn btn-primary text-uppercase">Créer mon CV</Link>
                <img src = "../../assets/images/dublin-resume-templates.avif" />
            </div>
        </div>
    </header>

    <div className="section-one">
        <div className="container">
            <div className = "section-one-content">
                <div className="section-one-l">
                    <img src = "../../assetsas/images/visual-0c7080adf17f1f207276f613447c924f667dab34b7ac415cd7ef653172defd0b.svg" />
                </div>
                <div className = "section-one-r text-center">
                    <h2 className = "lg-title">Laissez le meilleur Générateur de CV vous guider vers la réussite professionnelle !</h2>
                    <p className = "text">Réaliser votre rêve professionnel peut sembler être un défi insurmontable. Nous sommes là pour changer la donne. Donnez-vous un avantage réel avec le meilleur Générateur de CV en ligne : conçu par des experts, amélioré par des données, et approuvé par des millions de professionnels</p>
                    <div className = "btn-group">
                        <Link to={'/form'} className = "btn btn-primary text-uppercase">Créer mon CV</Link>
                        {/* <a href = "#" className = "btn btn-secondary text-uppercase">watch video</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className = "section-two bg-bright">
        <div className="container">
            <div className="section-two-content">
                <div className = "section-items">
                    <div className = "section-item">
                        <div className = "section-item-icon">
                            <img src = "assets/images/feature-1-edf4481d69166ac81917d1e40e6597c8d61aa970ad44367ce78049bf830fbda5.svg" alt = "" />
                        </div>
                        <h5 className = "section-item-title">Faites un CV qui attire les récruteurs !</h5>
                        <p className = "text">Utilisez notre créateur de CV avec ses outils de création avancés pour raconter une histoire professionnelle qui captive les recruteurs, les responsables du recrutement et même les PDG.</p>
                    </div>

                    <div className = "section-item">
                        <div className = "section-item-icon">
                            <img src = "assets/images/feature-2-a7a471bd973c02a55d1b3f8aff578cd3c9a4c5ac4fc74423d94ecc04aef3492b.svg" alt = "" />
                        </div>
                        <h5 className = "section-item-title">Rédaction de CV simplifiée !</h5>
                        <p className = "text">La création de CV n a jamais été aussi simple. Textes pré-générés, designs visuels et bien plus encore - tout est déjà intégré dans notre créateur de CV. Il vous suffit de renseigner vos informations</p>
                    </div>

                    <div className = "section-item">
                        <div className = "section-item-icon">
                            <img src = "assets/images/feature-3-4e87a82f83e260488c36f8105e26f439fdc3ee5009372bb5e12d9421f32eabdd.svg" alt = "" />
                        </div>
                        <h5 className = "section-item-title">Un générateur de CV éprouvé par les recruteurs.</h5>
                        <p className = "text">Notre constructeur de CV et son contenu pré-généré sont éprouvés par des recruteurs et des experts en informatique. Nous vous aidons à rendre votre CV vraiment compétitif dans le processus de recrutement</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer className = "footer bg-dark">
        <div className="container">
            <div className = "footer-content text-center">
                <p className="fs-15">&copy;Copyright 2024. L`&apos;`équipe 3 ODC react-js - <span>Générateur de CV</span></p>
            </div>
        </div>
    </footer>
  </>
}

export default Accueil