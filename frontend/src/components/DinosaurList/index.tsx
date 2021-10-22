import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../../services/api";
import { Dinosaur } from "../../types/dinosaurs";
import DinosaurItem from "../DinosaurItem";



const DinosaurList = () => {
    
    const [dinosaurs, setDinosaurs] = useState<Dinosaur[]>([]);

    const loadDinosaurs = async () => {
        const response = await api.get('api/dinosaurs/');
        const data = response.data as Dinosaur[];
        setDinosaurs(data)
    }

    useEffect(() => {
        loadDinosaurs();
    }, [])


    return (
        <Container style={{minHeight: '89vh'}}>
            <Row>
                {dinosaurs.map(dinosaur => {
                return (
                    <Col key={dinosaur.id} sm={12} md={6} lg={4} xl={3}>
                        <DinosaurItem dinosaur={dinosaur}/>
                    </Col>
                )})}
            </Row>
        </Container>
    )
}

export default DinosaurList;