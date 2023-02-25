import './style.css'
var logo = 'logo.jpeg'

export function Top() {

    return (
        <header className="top">

            <div className="container">

                <img className="logo" src={logo} />

                <div className="saldo">
                    <span>
                        R$ <strong id="saldo">120</strong>,00
                    </span>
                </div>

            </div>

        </header>
    )

}