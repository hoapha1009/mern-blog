import { Container, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import PostList from "../components/PostList";
import AddIcon from "@material-ui/icons/Add";
import * as actions from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
}));

export default function HomePage() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleShowCreatePostModal = React.useCallback(() => {
        dispatch(actions.showModal());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <Header />
            <PostList />
            <CreatePostModal />
            <Fab
                color="primary"
                className={classes.fab}
                onClick={handleShowCreatePostModal}
            >
                <AddIcon />
            </Fab>
        </Container>
    );
}
