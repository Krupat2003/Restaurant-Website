import React from 'react';
import Layout from '../component/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
    return (
        <Layout>
            <Box sx={{
                my: 8,
                p: 2,
                textAlign: "center",
                "& h4": {
                    fontWeight: "bold",
                    my: 3,
                    fontSize: "2rem"
                },
                "& p": {
                    textAlign: "justify",
                },
                "@media (max-width:600px)" :{
                    mt:0,
                    "& h4" : {
                        fontSize : "1.5rem"
                    },
                }
            }}>
                <Typography variant='h4'>
                    Welcome to My Resturent
                </Typography>
                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
                <br />
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                </p>
            </Box>
        </Layout>
    )
}

export default About;
