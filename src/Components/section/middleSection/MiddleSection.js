import { Box, Container, Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import './middlesection.scss'
const MiddleSection = () => {
    return (
        <>
            <Box
                py={{ xs: 4, sm: 8, md: 14, xl: 14 }}
            >
                <Container>
                    <Box pb={4}>
                        <Typography
                            variant="h2"
                            fontSize={34}
                            gutterBottom>
                            This is a headline introducing
                            the company history and journey
                        </Typography>
                    </Box>
                    <Grid
                        container
                        spacing={3}
                        alignItems="center">

                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            fontSize={34}>

                            <Typography variant="body1" >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat nisl pretium fusce. Est placerat in egestas erat. Elit eget gravida cum sociis natoque penatibus. Donec et odio pellentesque diam. Cursus mattis molestie a iaculis at. Sit amet consectetur adipiscing elit. Quis enim lobortis scelerisque fermentum dui faucibus in. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla porttitor massa id neque aliquam vestibulum. A scelerisque purus semper eget duis at tellus at. Pretium lectus quam id Leo in vitae turpis.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6} >
                            <img src="Group99.png" alt="section img top" width="100%"></img>
                        </Grid>
                    </Grid>
                    <Box pb={4}>
                        <Typography>
                            Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Gravida quis blandit turpis cursus. Ultrices tincidunt arcu non sodales neque sodales. Scelerisque felis imperdiet proin fermentum leo. Quisque egestas diam in arcu cursus euismod quis viverra. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Nisi quis eleifend quam adipiscing vitae. Non pulvinar neque laoreet suspendisse interdum consectetur. Pretium vulputate sapien nec sagittis. Enim tortor at auctor urna nunc. Ornare massa eget egestas purus. Ultrices vitae auctor eu augue ut. Vel eros donec ac odio tempor orci dapibus. Placerat orci nulla pellentesque dignissim enim.
                        </Typography>
                    </Box>
                    <Box mb={4}>
                        <Typography variant="h3" gutterBottom>
                            This is a subheadline if a divider is necessary
                        </Typography>
                        <Typography>
                            Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Gravida quis blandit turpis cursus. Ultrices tincidunt arcu non sodales neque sodales. Scelerisque felis imperdiet proin fermentum leo. Quisque egestas diam in arcu cursus euismod quis viverra. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Nisi quis eleifend quam adipiscing vitae. Non pulvinar neque laoreet suspendisse interdum consectetur. Pretium vulputate sapien nec sagittis. Enim tortor at auctor urna nunc. Ornare massa eget egestas purus. Ultrices vitae auctor eu augue ut. Vel eros donec ac odio tempor orci dapibus. Placerat orci nulla pellentesque dignissim enim.
                        </Typography>
                        <Typography m={2}>
                            Morbi tristique senectus et netus et malesuada fames ac turpis. Amet risus nullam eget felis. Nec dui nunc mattis enim ut tellus. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Arcu dui vivamus arcu felis bibendum ut. Et ligula ullamcorper malesuada proin.
                        </Typography>
                    </Box>
                    <Box width="100%">
                        <img src="Group 242.png" alt="section img" width="100%"></img>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default MiddleSection;