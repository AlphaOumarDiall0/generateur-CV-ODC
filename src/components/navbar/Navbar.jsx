
function Navbar() {
  return <>
    <nav className = "navbar bg-white">
        <div className="container">
            <div className = "navbar-content">
                <div className = "brand-and-toggler">
                    <a href = "index.html" className = "navbar-brand">
                        <img src = {'images/curriculum-vitae.png'} alt = "" className = "navbar-brand-icon" />
                        <span className = "navbar-brand-text">Générateur <span>de CV.</span></span>
                    </a>
                    <button type = "button" className = "navbar-toggler-btn">
                        <div className = "bars">
                            <div className = "bar"></div>
                            <div className = "bar"></div>
                            <div className = "bar"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </nav>
  </>
}

export default Navbar