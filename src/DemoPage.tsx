import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const DemoPage = () => {
    const [page, setPage] = useState(0);
    const [name, setName] = useState<string>();
    const [popes, setPopes] = useState<{ name: string, personalName: string, birthYear: number }[]>();

    useEffect(() => {
        if (page === 2) {
            const api = axios.create();
            api.get("http://example.api/popes").then(res => setPopes(res.data));
        }
    }, [page]);

    return <>
        {page === 0 && <Typography variant="h4">Hello world!</Typography>}
        {page === 1 && <Grid container>
            <Grid item xs={12}>
                <TextField id="emailInputId" variant="outlined" placeholder="John Doe" label="Name" />
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={() => setName((document.getElementById("emailInputId") as HTMLInputElement).value)}>
                    Anzeigen
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2" style={{ margin: "auto" }}>{name ? name : ""}</Typography>
            </Grid>
        </Grid>}
        {page === 2 && popes && <div style={{ height: "400px" }}>
            <DataGrid
                rows={popes}
                columns={[
                    {
                        field: "name",
                        headerName: "Name",
                        flex: 1000
                    },
                    {
                        field: "personalName",
                        headerName: "Persönlicher Name",
                        flex: 1000
                    },
                    {
                        field: "birthYear",
                        headerName: "Geburtsjahr",
                        flex: 1000
                    }
                ]}
            />
        </div>}
        <Button data-testid="nextButton" variant="outlined" onClick={() => setPage(page === 2 ? 0 : page + 1)} style={{ position: "absolute", bottom: 0, right: 0, margin: "5%" }}>
            Weiter
        </Button>
    </>;
}

export default withRouter(DemoPage);