import {Navbar} from "../components";

const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-cover bg-center bg-home-mobile bg-home-tablet bg-home-desktop">
                <Navbar/>
            </div>
        </>
    );
};

export default Home;