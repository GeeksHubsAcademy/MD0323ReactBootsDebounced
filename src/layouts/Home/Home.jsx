import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import { BasicCard } from "../../common/BasicCard/BasicCard";
import { bringMovies } from "../../services/apiCalls";

export const Home = () => {
  const [criteria, setCriteria] = useState("");
  const [movies, setMovies] = useState([]);

  const inputHandler = (e) => {
    setCriteria(e.target.value);
  };

  useEffect(() => {
    if (criteria !== "") {
      const traer = setTimeout(() => {
        bringMovies(criteria)
          .then((searchResults) => {
            console.log(searchResults)
            setMovies(searchResults.data.results);
          })
          .catch((error) => console.log(error));
      }, 375);

      return () => clearTimeout(traer);
    } else {
      if (movies.length !== 0) {
        setMovies([]);
      }
    }
  }, [criteria]);

  return (
    <Container fluid="md" className="homeDesign">
      <Row>
        <Col>
          <input
            type="text"
            name="criteria"
            onChange={(e) => inputHandler(e)}
          />
        </Col>
      </Row>
      <Row>
        {movies.map((movie) => {
          return (
            <Col key={movie.id}>
              <BasicCard 
                original_title={movie.original_title}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}    
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
