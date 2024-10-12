import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Carousel.css';

function CarouselComponent() {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
        >
            <div>
                <img src="https://images.unsplash.com/photo-1513415431848-a433b3de449f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ganesh Chaturthi" />
            </div>
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1661964068107-6d7f6f4fea51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mumbai City" />
            </div>
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mumbai City" />
            </div>
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mumbai City" />
            </div>
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1690099567559-706ce29ef4de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mumbai City" />
            </div>
        </Carousel>
    );
}

export default CarouselComponent;