import './StartView.css';

export const StartView =  () => {
    return (
        <>
            <main className="start-view">
                <div className="main-logo">
                    <img src="logonaczarnym.jpg" alt="Garage logo"/>
                </div>
                <div>
                    <form className="main-form" action="">
                        <label>
                            Numer zlecenia: <br/>
                            <input type="number"/>
                        </label>
                        <label>
                            Hasło: <br/>
                            <input type="text"/>
                        </label>
                        <button>Wyświetl</button>
                    </form>
                </div>
                <footer className="main-footer"><a className="main-footer-link" href="mailto:przemoszadkowski@o2.pl">&copy; Przemysław Szadkowski</a></footer>
            </main>
        </>
    )
}