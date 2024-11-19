import React from "react";
import { Head } from "@inertiajs/react";
const Home = ({ data }) => {
    return (
        <>
            <Head>
                <title> Hello Homepage</title>
            </Head>
            <p> This is from home {data}</p>
        </>
    );
};

export default Home;
