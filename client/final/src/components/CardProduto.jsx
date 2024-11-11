import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardSubtitle from 'react-bootstrap/esm/CardSubtitle';
import CardText from 'react-bootstrap/esm/CardText';

const CardProduto = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.paraibanoticia.net.br/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-10-at-18.40.44.jpeg" />
      <Card.Body>
        <Card.Title>Nome Produto: {props.nome}</Card.Title>
        <CardSubtitle className="mb-2 text-muted">Preço: {props.preco}</CardSubtitle>
        <Card.Text>
          Descrição: {props.descricao}
        </Card.Text>
        <CardText>
          Categoria: {props.categoria}
        </CardText>

        <Card.Link href={`/produtos/edicao/${props.id}`}>
          <Button variant="warning">Editar</Button>
        </Card.Link>

        <Card.Link href={`/produtos/excluir/${props.id}`}>
          <Button variant="danger">Excluir</Button>
        </Card.Link>

      </Card.Body>
    </Card>
  );
}
export default CardProduto
