import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga() {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (error) {
        yield put(actions.getPosts.getPostsFailure(error.message));
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload);
        yield put(actions.createPost.createPostSuccess(post.data));
    } catch (error) {
        yield put(actions.createPost.createPostFailure(error.message));
    }
}

function* updateLikePostSaga(action) {
    try {
        const updatedPost = yield call(api.updateLikePost, action.payload);
        yield put(
            actions.updateLikePost.updateLikePostSuccess(updatedPost.data)
        );
    } catch (error) {
        yield put(actions.updateLikePost.updateLikePostFailure(error.message));
    }
}

function* deletePostSaga(action) {
    try {
        yield call(api.deletePost, action.payload._id);
        yield put(actions.deletePost.deletePostSuccess(action.payload));
    } catch (error) {
        yield put(actions.deletePost.deletePostFailure(error.message));
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(
        actions.updateLikePost.updateLikePostRequest,
        updateLikePostSaga
    );
    yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
}

export default mySaga;
