import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    title: 'Tudo para o seu estilo',
    description: 'Encontre peças que combinam com você.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80',
    title: 'Novidades da estação',
    description: 'Descubra as tendências que acabaram de chegar.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80',
    title: 'Ofertas especiais',
    description: 'Aproveite condições exclusivas por tempo limitado.',
  },
];

function CarouselComponent () {
    return (
        <Carousel
            className="shop-carousel"
            interval={3000}
            pause="hover"
            touch
        >
            {slides.map((slide) => (
                <Carousel.Item key={slide.title}>
                    <img
                        className="shop-carousel__image"
                        src={slide.image}
                        alt={slide.title}
                    />

                    <Carousel.Caption className="shop-carousel__caption">
                        <h2>{slide.title}</h2>

                        <p>{slide.description}</p>

                    </Carousel.Caption>

                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselComponent