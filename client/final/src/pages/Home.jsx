import React from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import FormLabel from 'react-bootstrap/esm/FormLabel'
import FormSelect from 'react-bootstrap/esm/FormSelect'
import CardProduto from '../components/CardProduto'

const Home = () => {
  return (
    <div>
      <Container>
        <h1>Lista de Produtos</h1>
        <div className="d-grid col-2 gap-2 d-inline-flex justify-content-center">
          <Button
            variant="primary"
            size="lg"
            className="mb-3 d-inline-flex justify-content-center"
            onClick={() => {
              
            }}
          >
            <span
              className="material-symbols-outlined flex"
              style={{ fontSize: "30px" }}
            >
              add_circle
            </span>
            Cadastrar
          </Button>
        </div>
            <FormGroup controlId="formGridCategoria">
              <FormLabel>Selecione uma Categoria</FormLabel>
              <FormSelect defaultValue="...">
                  <option>Cereal</option>
                  <option>Bebidas</option>
              </FormSelect>
            </FormGroup>

        <div className="lista-produtos mt-3">
          <CardProduto/>
        </div>

      </Container>

    </div>
  )
}

export default Home
