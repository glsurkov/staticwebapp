import React from 'react';
import SectionHeader from "./SectionHeader";
import About from "./About";
import Container from "../Container";

const Section = () => {
    return (
        <section className = "section">
            <Container contain = {[<SectionHeader/>, <About/>]}/>
        </section>
    );
};

export default Section;