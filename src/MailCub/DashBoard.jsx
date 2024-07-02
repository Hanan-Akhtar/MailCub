import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import axios from 'axios';

const Dashboard = () => {
    // const [verifiedDomains, setVerifiedDomains] = useState(10);
    // const [unverifiedDomains, setUnverifiedDomains] = useState(5);
    const [loading, setLoading] = useState(true);
    const [totalUser, setTotalUser] = useState(0);
    const apiUrl = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token")
                const headers = {
                    'x-sh-auth': token,
                };
                const response = await axios.post(`${apiUrl}api/customer/get_customers`, {}, { headers: headers });
                setTotalUser(response.data.count);
                setLoading(false);
                console.log("successful", response.data)
            } catch (error) {
                console.error('Error fetching domain data:', error.response);
                setLoading(false);
            }
        };
    
        fetchData(); 
    }, []);

    return (
        <div class="container">
            <Typography style={{ marginBottom: "50px" }} variant="h4" gutterBottom>
                Hi, Welcome back
            </Typography>

            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <Card sx={{ paddingTop: "40px", bgcolor: '#eafcd4', color: '#196c1b' }}>
                        <CardContent sx={{ backgroundColor: "#c7eab1", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa fa-users" aria-hidden="true"></i>
                        </CardContent>
                        <CardContent>   {loading ? (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55px' }}>
                                <div className="spinner-border text-success" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <Typography variant="h3" align="center">{totalUser}</Typography>
                        )}
                            <Typography variant="body1" align="center">Total Users</Typography>
                        </CardContent>
                    </Card>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <Card sx={{ paddingTop: "40px", bgcolor: '#d0f2fe', color: '#103570' }}>
                        <CardContent sx={{ backgroundColor: "#abd4f1", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <LanguageIcon />
                        </CardContent>
                        <CardContent>
                            <Typography variant="h3" align="center"><h1>10</h1></Typography>
                            <Typography variant="body1" align="center">Verified Domains</Typography>
                        </CardContent>
                    </Card>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <Card sx={{ paddingTop: "40px", bgcolor: '#ffe7da', color: '#741d32' }}>
                        <CardContent sx={{ backgroundColor: "#f3c6bf", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <DoDisturbIcon />
                        </CardContent>
                        <CardContent>
                            <Typography variant="h3" align="center"><h1>5</h1></Typography>
                            <Typography variant="body1" align="center">Unverified Domains</Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </div>

    );
};

export default Dashboard;
