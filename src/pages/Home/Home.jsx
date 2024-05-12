import clsx from 'clsx';
import s from './Home.module.css';

function Home() {
    return (
        <div className={s.div}>
            <h1 className={clsx(s.heading, s.title)}>Speedy Rentals</h1>
            <p>
                The <span className={s.title}>Speedy Rentals</span> is a user-friendly platform that allows customers to easily browse, compare, and store favorites rental cars in New York. With a
                wide selection of vehicles from various rental companies, users can filter their search based on criteria such as car make, price range, and mileage. The app also features detailed
                descriptions and photos, providing customers with all the information they need to make an informed decision.
            </p>
            <p>
                Whether for business or leisure, the <span className={s.title}>Speedy Rentals</span> offers a convenient and efficient way to find the perfect rental car for any occasion.
            </p>
        </div>
    );
}

export default Home;
