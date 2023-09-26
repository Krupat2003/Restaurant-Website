import React from 'react';
import Layout from '../component/Layout/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Layout>
            <div className='home' >
                <div className='headerContainer'>
                    <h1>Food Website</h1>
                    <h2>
                        Best Food In India
                    </h2>
                    <p> The generated Lorem Ipsum is therefore always free  from <br /> repetition  or non-characteristic words etc..</p>
                    <Link to='/menu'>
                        <button>
                            ORDER NOW
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default Home;
