import React from "react";
import { Form, Button } from "react-bootstrap";

const CreateTournament = ({bus}) => {

    const enviar_formulario = (e) => {
        e.preventDefault()
    
        const tournament = {
          name: e.target.name.value,
          place: e.target.place.value,
          date: e.target.date.value,
          numberofteams: e.target.numberofteams.value,
          prize: e.target.prize.value,
          state: e.target.state.value
        }
    
        bus(tournament)
    
      }

  return (
    <Form onSubmit={enviar_formulario}>
      <Form.Group className="mb-3">
        <Form.Control type="text" name="name" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" name="place" placeholder="Place" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="date" name="date" placeholder="Date" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="number" name="numberofteams" placeholder="Number of Teams" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" name="prize" placeholder="Prize" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" name="state" placeholder="State" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Save Tournament
      </Button>
    </Form>
  );
};

export default CreateTournament;
