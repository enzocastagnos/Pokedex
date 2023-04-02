const container = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
};

function NavBar({ next, prev }) {
    return (
        <div style={container}>
            <button onClick={prev}>Précédent</button>
            <button onClick={next}>Suivant</button>
        </div>
    );
}
export default NavBar;