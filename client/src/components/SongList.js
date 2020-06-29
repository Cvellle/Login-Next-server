import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class SongList extends Component {

    onLike(id, likes) {
        this.props.mutate({
            variables: { id, likes },
            optimisticResponse: {
                __typename: 'mutation',
                likeSong: {
                    __typename: 'SongType',
                    id,
                    likes: 3
                }
            }
        })
    }
    // onLike(id, content) {
    //     this.props.mutate({
    //         variables: { id },
    //         optimisticResponse: {
    //             __typename: 'mutation',
    //             likeSong: {
    //                 __typename: 'SongType',
    //                 id,
    //                 content: "s"
    //             }
    //         }
    //     })
    // }
    renderSongs() {
        const { songs } = this.props;
        return songs.map(({ id, content, likes }) => (
            <li key={id} className="collection-item">
                {likes}
                <div className="vote-box">
                    <i className="material-icons" onClick={() => this.onLike(id, likes)}>thumb_up</i>
                    {likes}
                </div>
            </li>
        ))
    }
    render() {
        return (
            <ul className="collection">
                {this.renderSongs()}
            </ul>
        )
    }
}

const mutation = gql`
    mutation LikeSong($id: ID) {
        likeSong(id: $id) {
        id
        likes
        }
    }
`;
// const mutation = gql`
//     mutation LikeSong($id: ID) {
//         likeSong(id: $id) {
//         id
//         content
//         }
//     }
// `;
export default graphql(mutation)(SongList);
