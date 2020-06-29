import React, { Component } from "react";
import gql from "graphql-tag";
// import { gql } from "apollo-boost";
import { graphql, compose } from "react-apollo";
import { Link } from "react-router-dom";
import { useQuery } from 'react-apollo-hooks'

import query from "../queries/fetchAlbumsList";

const GET_DOGS = gql`
  {
    albums {
      id
      title
    }
  }
`;

function DogsList() {
    const { loading, error, data } = useQuery(GET_DOGS);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <p>Click on buttons to start</p>
            <ul name="dog">
                {data.albums.map((dog, i) => (
                    <li key={dog.id}>
                        <button>{dog.title}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

class AlbumList extends Component {
    deleteAlbum(id) {
        this.props
            .mutate({
                variables: { id },
                refetchQueries: [{ query }],
            })
            .then(() => this.props.data.refetch());
    }
    renderAlbums() {
        const { albums } = this.props.data;
        return albums.map(({ id, title }) => (
            <li key={id} className="collection-item">
                <Link to={`/albums/${id}`}>{title}</Link>
                <i className="material-icons" onClick={() => this.deleteAlbum(id)}>
                    delete
        </i>
            </li>
        ));
    }
    render() {
        const { loading } = this.props.data;
        if (loading) {
            return <div>Loading....</div>;
        }
        return (
            <div>
                <h3 className="headline">Album Store</h3>
                <ul className="collection">{this.renderAlbums()}</ul>
                <Link to="/albums/new" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
                <DogsList />
            </div>
        );
    }
}

const mutation = gql`
  mutation DeleteAlbum($id: ID) {
    deleteAlbum(id: $id) {
      id
    }
  }
`;
export default compose(graphql(mutation), graphql(query))(AlbumList);
