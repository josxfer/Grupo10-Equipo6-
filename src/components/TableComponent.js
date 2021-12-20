import React from "react";
import { Button, Col, Row } from "reactstrap";
import { Table } from "react-bootstrap";

const TableComponent = ({
  columnas = [],
  registros = [],
  botones = true,
  bus,
  campos = [],
}) => {
  const click_eliminar = (e) => {
    bus(e.target.id);
  };

  const click_actualizar = (e) => {
    bus(e.target.id);
  };

  return (
    <div className="widget-next-match">
    <Table className="table custom-table" striped bordered hover variant="dark">
      <thead>
        <tr>
          {columnas.map((columna, index) => {
            return <th key={index}>{columna}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {registros.map((registro, index) => {
          return (
            <tr key={index}>
              {campos.map((campo, k) => {
                return <td key={k}>{registro[campo]}</td>;
              })}
              {botones ? (
                <td>
                  <Row>
                    <Col xs="3">
                      <Button id={registro._id} onClick={click_actualizar} color="primary"><span className="fa fa-edit"></span></Button>
                    </Col>
                    <Col>
                      <Button id={registro._id} onClick={click_eliminar} color="danger"><span className="fa fa-window-close"></span></Button>
                    </Col>
                  </Row>
                </td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
    </Table>
    </div>
  );
};

export default TableComponent;
