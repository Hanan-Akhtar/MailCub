import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

const Dashboard = () => {
    return (
        <div>
            <Typography style={{ marginBottom: "50px" }} variant="h4" gutterBottom>
                Hi, Welcome back
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card sx={{paddingTop:"40px", bgcolor: '#eafcd4', color: '#196c1b' }}>
                        <CardContent sx={{ backgroundColor:"#c7eab1", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa fa-users" aria-hidden="true"></i>
                        </CardContent>
                        <CardContent>
                            <Typography variant="h3" align="center">363</Typography>
                            <Typography variant="body1" align="center">Total Users</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ paddingTop:"40px", bgcolor: '#d0f2fe', color: '#103570' }}>
                        <CardContent sx={{ backgroundColor:"#abd4f1", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <LanguageIcon />
                        </CardContent>
                        <CardContent>
                            <Typography variant="h3" align="center">94</Typography>
                            <Typography variant="body1" align="center">Varified Domains</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ paddingTop:"40px",bgcolor: '#ffe7da', color: '#741d32' }}>
                        <CardContent sx={{ backgroundColor:"#f3c6bf", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <DoDisturbIcon  />
                        </CardContent>
                        <CardContent>
                            <Typography variant="h3" align="center">104</Typography>
                            <Typography variant="body1" align="center">Unvarified Domains</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
