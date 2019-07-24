import React, {Component} from 'react';
import './App.css';
import ResultTableComponent from "./ResultTableComponent";
import {
  MDBBtn, MDBModal, MDBModalFooter, MDBModalHeader,
} from "mdbreact";
import * as DBHelper from "./DBHelper";

class FavoriteView extends Component {
  state = {
    isModalOpen: false,
    collection: {name: null, books: []}
  };

  toggleCollectionModal = (collectionName) => {
    if (collectionName) {
      let ctx = this;
      DBHelper.search({text: "*"}).then(function (books) {
        console.log(books);
        if (books) {
          if (ctx.props.cart.size > 0) {
            for (let book of books) {
              if (ctx.props.cart.has(book.id)) {
                book.isAdded = true;
              }
            }
          }
          let collection = {name: collectionName, books: books};
          ctx.setState({
            isModalOpen: true,
            collection: collection
          });
        }
      }).catch((e) => {
        console.log(e);
        alert("Failed to retrieve collection!");
      });
    } else {
      this.setState({
        isModalOpen: false,
        collection: {name: null, books: []}
      });
    }
  };

  addAllBooks = () => {
    this.props.onCartAddAll(this.state.collection.books);
  };

  removeAllBooks = () => {
    this.props.onCartRemoveAll(this.state.collection.books);
  };

  closeCollectionModal = () => {
    this.toggleCollectionModal(null)
  };

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Your Favorite</h1>
        <p className="text-center">This is your collection....</p>
        <div className="row mt-4 mb-5">
          {/*Card deck*/}
          <div className="card-deck">
            <div className="card xs-4">
              <div className="view overlay">
                <img className="card-img-top"
                     src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                     alt="Card image cap"/>
                <a>
                  <div className="mask rgba-white-slight"/>
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">K-12 US Literature</h4>
                <h6>Curated by <a>Robert Koester</a></h6>
                <p>Language: English</p>
                <p className="card-text">This collection comprises works of American literature from colonial to
                  contemporary times, including poetry, short
                  stories, novels, drama, and nonfiction. The literary works provide opportunities for critical writing,
                  creative projects, and online discussions. Students develop vocabulary skills and refresh their
                  knowledge of grammar, usage, and mechanics in preparation for standardized tests.</p>
                <button type="button" className="btn btn-primary btn-md"
                        onClick={() => this.toggleCollectionModal("K-12 US Literature")}>Open collection
                </button>
              </div>
            </div>

            <div className="card xs-4">
              <div className="view overlay">
                <img className="card-img-top"
                     src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                     alt="Card image cap"/>
                <a>
                  <div className="mask rgba-white-slight"/>
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">STEM for high school students</h4>
                <h6>Curated by <a>Darren Moffatt</a></h6>
                <p>Language: English, Spanish</p>
                <p className="card-text">Discover meaningful, rigorous books and text sets for a fresh take on
                  STEM/STEAM
                  study. Our books explore the physical, life, health, earth and space sciences along with engineering,
                  art, mathematics, and technology. These high-interest nonfiction, realistic fiction, and science
                  fiction
                  books provide an engaging opportunity to discuss timely topics that will expand student knowledge and
                  inspire the scientists of the future.</p>
                <button type="button" className="btn btn-primary btn-md"
                        onClick={() => this.toggleCollectionModal("STEM for high school students")}>Open collection
                </button>
              </div>
            </div>

            <div className="card xs-4">
              <div className="view overlay">
                <img className="card-img-top"
                     src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                     alt="Card image cap"/>
                <a>
                  <div className="mask rgba-white-slight"/>
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Fairy Tales</h4>
                <h6>Curated by <a>Darren Moffatt</a></h6>
                <p>Language: English</p>
                <p className="card-text">Read our huge collection of famous fairy tales and bedtime stories. Brothers
                  Grimm fairy tales, Hans Christian Andersen, Charles Perrault, Aesop's fables,...</p>
                <button type="button" className="btn btn-primary btn-md"
                        onClick={() => this.toggleCollectionModal("Fairy Tales")}>Open collection
                </button>
              </div>
            </div>
          </div>
        </div>

        <MDBModal isOpen={this.state.isModalOpen} toggle={this.closeCollectionModal} centered size="lg">
          <MDBModalHeader toggle={this.closeCollectionModal}>{this.state.collection.name}</MDBModalHeader>
          <ResultTableComponent books={this.state.collection.books}
                                cart={this.props.cart}
                                onCartUpdate={(id) => this.props.onCartUpdate(id)}
                                emptyResultString={"Collection result is empty!"}/>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.closeCollectionModal}>Close</MDBBtn>
            <MDBBtn color="danger" disabled={this.state.collection.books <= 0}
                    onClick={this.removeAllBooks}>Remove all</MDBBtn>
            <MDBBtn color="primary" disabled={this.state.collection.books <= 0}
                    onClick={this.addAllBooks}>Add all</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

export default FavoriteView;