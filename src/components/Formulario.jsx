import ListaPeliculas from "./ListaPeliculas";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const valoresInicialesForm = {
    titulo: "",
    categoria: "",
    sinopsis: "",
};

const Formulario = () => {
    const [pelicula, setPelicula] = useState(valoresInicialesForm);
    const [listaPeliculas, setListaPeliculas] = useState([]);

    const handleChange = (e) => {
        //desestructuro el name y el value del objeto e.tarjet:
        const { name, value } = e.target;
        setPelicula({ ...pelicula, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setListaPeliculas([...listaPeliculas, pelicula]);
        setPelicula(valoresInicialesForm);
    };

    return (
        <>
            <section className="container border rounded p-3 bg-light">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="Form.ControlInput1">
                        <Form.Label className="fs-5 lead ms-2">Título</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ej: Forrest Gump"
                            onChange={handleChange}
                            name="titulo"
                            value={pelicula.titulo}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Form.ControlInput2">
                        <Form.Label className="fs-5 lead ms-2">Categoría</Form.Label>
                        {/* al Form.Select no le anda el required de bootstrap... ??? */}
                        <Form.Select required aria-label="Default select " onChange={handleChange} name="categoria" value={pelicula.categoria}>
                            <option value="">Seleccione una opción...</option>
                            <option value="comedia">Acción</option>
                            <option value="drama">Comedia</option>
                            <option value="infantil">Infantíl</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                        <Form.Label className="fs-5 lead ms-2">Sinopsis</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            placeholder="Agregue un resumen breve de la pelicula."
                            onChange={handleChange}
                            name="sinopsis"
                            value={pelicula.sinopsis}
                        />
                    </Form.Group>
                    <Form.Group className="my-3 text-center" controlId="Form.ControlButton">
                        <Button variant="outline-dark" type="submit">
                            <i className="bi bi-film"></i> Guardar
                        </Button>
                    </Form.Group>
                </Form>
            </section>
            <section className="container mt-5">
                <h1 className="display-6 text-center text-light mt-3">
                    Lista de peliculas <i className="bi bi-camera-reels"></i>
                </h1>
                <hr className="mt-0 mx-5 text-light" />
                <ListaPeliculas />
            </section>
        </>
    );
};

export default Formulario;
