import Slider from 'react-slick';
import { Link } from '@modern-js/runtime/router';
import 'slick-carousel/slick/slick.css';
import styles from './style.module.css';
import Icon from '@/components/Icon';

const COUNT = 5000;

function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className={className}
      style={{
        right: 5,
        position: 'absolute',
        zIndex: '4',
        transform: 'translateY(-50%)',
        top: '50%',
        borderRadius: '50%',
        border: '2px solid #fff',
        width: '52px',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="button"
      onClick={onClick}
    >
      <Icon name="ArrowRight" color="#fff" />
    </button>
  );
}
function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className={className}
      style={{
        left: 5,
        position: 'absolute',
        zIndex: '4',
        transform: 'translateY(-50%)',
        top: '50%',
        borderRadius: '50%',
        border: '2px solid #fff',
        width: '52px',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="button"
      onClick={onClick}
    >
      <Icon name="ArrowLeft" color="#fff" />
    </button>
  );
}

export default function Banner({ list }: any) {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: COUNT,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow className={styles.slickPrev} />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          zIndex: '4',
          padding: '8px',
        }}
      >
        <ul
          style={{
            margin: '0px',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '6px',
          }}
        >
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          background: '#fff',
          content: '',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          cursor: 'pointer',
          opacity: '0.2',
          ...styles,
        }}
      />
    ),
  };

  return (
    <section className={styles.banner}>
      <div className="banner w-full lg:w-[1240px] relative">
        <Slider className="w-full flex-row" {...settings}>
          {list?.map((item: any) => (
            <Link
              key={item.id}
              to="/"
              title={item.title}
              className="banner-item relative"
            >
              <img src={''} alt="" width="100%" />
              <div className="banner-info text-center md:text-left">
                <h3 className="text-2xl md:text-6xl font-default font-bold">
                  {item.title}
                </h3>
                <p className="text-white text-xs md:text-base mt-0 lg:mt-2 block">
                  THE PATH OF AN AUTHENTIC PILGRIM
                </p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
}
