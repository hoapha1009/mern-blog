import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        marginBottom: 20,
        fontWeight: "light",
        padding: "5px 0",
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Typography variant="h4" align="center" className={classes.container}>
            Blog
        </Typography>
    );
}
