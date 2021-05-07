import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, updateLikePost } from "../../redux/actions";

const PostItem = ({ post }) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleLikeBtnClick = React.useCallback(() => {
        dispatch(
            updateLikePost.updateLikePostRequest({
                ...post,
                likeCount: post.likeCount + 1,
            })
        );
    }, [dispatch, post]);

    const onDeletePost = React.useCallback(() => {
        dispatch(deletePost.deletePostRequest(post));
    }, [dispatch, post]);

    const handleOpenMenu = (e) => {
        setAnchorEl(e.target);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Card>
                <CardHeader
                    avatar={<Avatar>A</Avatar>}
                    title={post.title}
                    subheader={moment(post.updatedAt).format(
                        "HH:MM MMM DD, YYYY"
                    )}
                    action={
                        <IconButton onClick={handleOpenMenu}>
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardMedia
                    image={post.attachment}
                    title={post.title}
                    style={{
                        height: "400px",
                        width: "400px",
                        objectFit: "cover",
                    }}
                />
                <CardContent>
                    <Typography variant="h5" color="textPrimary">
                        {post.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        color="textSecondary"
                    >
                        {post.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={handleLikeBtnClick}>
                        <FavoriteIcon />
                        <Typography component="span" color="textSecondary">
                            {`${post.likeCount} likes`}
                        </Typography>
                    </IconButton>
                </CardActions>
            </Card>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: "center",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={onDeletePost}>Delete</MenuItem>
            </Menu>
        </>
    );
};

export default PostItem;
