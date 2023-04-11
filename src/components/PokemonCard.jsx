



function PokemonCard({ props }) {





    return (
        <div>

            <figure>

                {props.imgSrc ? (<img src={props.imgSrc} alt={props.name} />) : (<p>???</p>)}





                <figcaption>{props.name}</figcaption>
            </figure>

        </div>
    )

}


export default PokemonCard