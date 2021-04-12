import React from "react";
import { Container } from "react-bootstrap";
import Image from "../components/Image/Image";

function Portfolio() {
    return (
        <div>
            <Image backgroundImage="https://mdbootstrap.com/img/Photos/Others/images/91.jpg">
                <Container >
                    <h1 className="top">Portfolio</h1>
                </Container>

            </Image>
        </div>
    )
}

export default Portfolio;