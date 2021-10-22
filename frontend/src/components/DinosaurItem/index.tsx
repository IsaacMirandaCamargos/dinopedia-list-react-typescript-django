import { Card } from "react-bootstrap";
import { Dinosaur } from "../../types/dinosaurs";

interface OwnProps {
    dinosaur: Dinosaur
}

const DinosaurItem = ({dinosaur}: OwnProps) => {
    return (
        <Card className="m-4">
            <Card.Img variant="top" 
                src={dinosaur.photo} />
            <Card.Body>
                <Card.Title>{dinosaur.name}</Card.Title>
                <Card.Text style={{minHeight: "150px"}}>{dinosaur.description.slice(0,120) + "..."}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default DinosaurItem;