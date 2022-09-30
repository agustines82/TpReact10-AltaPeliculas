import Pelicula from "./Pelicula";
const ListaPeliculas = ({ listadoPeliculas }) => {
    return (
        <>
            <section className="container row justify-content-center">
                {listadoPeliculas.map((elemento, posicion) => (
                    <Pelicula key={posicion} movie={elemento} />
                ))}
            </section>
        </>
    );
};

export default ListaPeliculas;
