import React from "react";
import { Container } from "react-bootstrap";
import Image from "../components/Image/Image";

function Contact() {
    return (
        <div>
            <Image backgroundImage="https://mdbootstrap.com/img/Photos/Others/images/91.jpg">
                <Container >
                    <h1 className="top">Contact</h1>
                </Container>

            </Image>
        </div>
    )
}

export default Contact;