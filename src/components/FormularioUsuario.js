import React from "react";
import { Form, Button } from "react-bootstrap";

const FormularioUsuario = ({bus}) => {

    const enviar_formulario = (e) => {
        e.preventDefault()
    
        const usuario = {
          cedula: e.target.cedula.value,
          nombre: e.target.nombre.value,
          correo: e.target.correo.value,
          acceso: e.target.acceso.value,
          contraseña: e.target.contraseña.value,
          confirmar: e.target.confirmar.value
        }
    
        bus(usuario)
    
      }

  return (
    <Form onSubmit={enviar_formulario}>
      <Form.Group className="mb-3">
        <Form.Control type="text" name="cedula" placeholder="Numero de cedula" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" name="nombre" placeholder="Nombre Completo" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="email" name="correo" placeholder="Correo Electronico" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" name="acceso" placeholder="Nivel de Acceso" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="password" name="contraseña" placeholder="Contraseña" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="password" name="confirmar" placeholder="Confirmar Contraseña" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Crear Usuario
      </Button>
    </Form>
  );
};

export default FormularioUsuario;
