function NavBar({ next, prev }) {

    return (
        <div>
            <button onClick={prev}>Précédent</button>
            <button onClick={next}>Suivant</button>


        </div>

    );



}

export default NavBar