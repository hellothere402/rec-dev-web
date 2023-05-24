import {Container, Grid} from "@mui/material";
import BrandBar from "../components/BrandBar";

function Home() {
    return (
        <Container fluid>
            <Grid>
                <Grid item>
                   <BrandBar />
                </Grid>
            </Grid>
        </Container>

            )
}

export default Home;