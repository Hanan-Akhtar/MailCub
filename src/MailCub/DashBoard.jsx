import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import axios from 'axios';

const Dashboard = () => {
    const [verifiedDomains, setVerifiedDomains] = useState(0);
    const [unverifiedDomains, setUnverifiedDomains] = useState(0);
    const apiUrl = process.env.REACT_APP_API_URL;


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token=localStorage.getItem("token")
            const headers = {
              'x-sh-auth': token,
          };
            const response = await axios.get(`${apiUrl}api/customer/get_customers`,{} ,{ headers: headers });
            setVerifiedDomains(response.data.verified);
            setUnverifiedDomains(response.data.unverified);
            console.log("successful",response.data)
        } catch (error) {
            console.error('Error fetching domain data:', error.response);
        }
    };

    return (
        <div>
            <Typography style={{ marginBottom: "50px" }} variant="h4" gutterBottom>
                Hi, Welcome back
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card sx={{ paddingTop: "40px", bgcolor: '#eafcd4', color: '#196c1b' }}>
                        <CardContent sx={{ backgroundColor: "#c7eab1", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa fa-users" aria-hidden="true"></i>
                        </CardContent>
                        <CardContent>
                            <Typography variant="h3" align="center">{verifiedDomains + unverifiedDomains}</Typography>
                            <Typography variant="body1" align="center">Total Users</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ paddingTop: "40px", bgcolor: '#d0f2fe', color: '#103570' }}>
                        <CardContent sx={{ backgroundColor: "#abd4f1", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <LanguageIcon />
                        </CardContent>
                        <CardContent>
                            <Typography variant="h3" align="center">{verifiedDomains}</Typography>
                            <Typography variant="body1" align="center">Verified Domains</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ paddingTop: "40px", bgcolor: '#ffe7da', color: '#741d32' }}>
                        <CardContent sx={{ backgroundColor: "#f3c6bf", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <DoDisturbIcon />
                        </CardContent>
                        <CardContent>
                            <Typography variant="h3" align="center">{unverifiedDomains}</Typography>
                            <Typography variant="body1" align="center">Unverified Domains</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
