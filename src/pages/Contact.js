import React from 'react';
import Layout from '../component/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
    return (
        <Layout>
            <Box sx={{
                my: 5,
                m: 7,
                "& h4": {
                    fontWeight: "bold",
                    mb: 2,
                },
                // "& p" :{
                //     p :4,
                // }
            }}>
                <Typography variant='h4'>
                    Contact My Restutant
                </Typography>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </p>
            </Box>
            <Box sx={{
                m: 3,
                width: "600px",
                ml:10,
                "@media (max-width:600px)" :{
                    width: "300px",
                    ml:6
                },
            }}>
                <TableContainer component={Paper}>
                    <Table aria-aria-label='contact table'>
                        <TableHead >
                            <TableRow>
                                <TableCell sx={{
                                    bgcolor: "black",
                                    color: "white",
                                    textAlign: "center"
                                }}>
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{
                                        color: "red",
                                        pt: 1,
                                    }} /> 1234567890 (tollfree)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <MailIcon sx={{
                                        color: "skyblue",
                                        pt: 1,
                                    }} /> help@myrest.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{
                                        color: "green",
                                        pt: 1,
                                    }} /> 2949596948
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact;
