import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";

const products = [
    {
        id: "1",
        name: "Model S",
        src: "/images/model-s.jpg",
        desc: "Order Online for Touchless Delivery",
        leftBtnTxt: "Custom Order",
        rightBtnTxt: "Existing Inventory"
    },
    {
        id: "2",
        name: "Model Y",
        src: "/images/model-y.jpg",
        desc: "Order Online for Touchless Delivery",
        leftBtnTxt: "Custom Order",
        rightBtnTxt: "Existing Inventory"
    },
    {
        id: "3",
        name: "Model 3",
        src: "/images/model-3.jpg",
        desc: "Order Online for Touchless Delivery",
        leftBtnTxt: "Custom Order",
        rightBtnTxt: "Existing Inventory"
    },
    {
        id: "4",
        name: "Model X",
        src: "/images/model-x.jpg",
        desc: "Order Online for Touchless Delivery",
        leftBtnTxt: "Custom Order",
        rightBtnTxt: "Existing Inventory"
    },
    {
        id: "5",
        name: "Solar Panels",
        src: "/images/solar-panel.jpg",
        desc: "Lowest Cost Solar Panels in America",
        leftBtnTxt: "Order Now",
        rightBtnTxt: "Learn More"
    },
    {
        id: "6",
        name: "Solar Roof",
        src: "/images/solar-roof.jpg",
        desc: "Produce Clean Energy From Your Roof",
        leftBtnTxt: "Order Now",
        rightBtnTxt: "Learn More"
    },
    {
        id: "7",
        name: "Accessories",
        src: "/images/accessories.jpg",
        desc: "",
        leftBtnTxt: "Order Now",
        rightBtnTxt: ""
    }
];

const Home = () => {
    return (
        <Container>
            <Header />
            {products.map((prd) => (
                <Section key={prd.id} obj={prd} />
            ))}
        </Container>
    );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;