import { Grid } from "@material-ui/core";
import React from "react";
import PostItem from "../PostItem";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);

    React.useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch]);

    return (
        <Grid container spacing={2} alignItems="stretch">
            {posts.map((post) => (
                <Grid item key={post._id} xs={12} sm={6}>
                    <PostItem post={post} />
                </Grid>
            ))}
        </Grid>
    );
};

export default PostList;
