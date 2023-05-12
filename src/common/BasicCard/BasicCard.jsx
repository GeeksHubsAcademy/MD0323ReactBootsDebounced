
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const BasicCard = (
  {
    original_title,
    title,
    poster_path,
    release_date
  }
) => {
  return (
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {original_title}
        </Card.Text>
        <Button variant="primary">{release_date}</Button>
      </Card.Body>
    </Card>
  );
}