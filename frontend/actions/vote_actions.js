export const upvote = (vote) => ({
    type: "UPVOTE",
    vote
});

export const editUpvote = (vote) => ({
    type: "EDIT_UPVOTE",
    vote
});
