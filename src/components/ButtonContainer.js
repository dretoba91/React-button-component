import React from "react";
import Button from "./Button";
import "../App.css";

function ButtonContainer() {
  return (
    <>
      <div className="button" id="top">
        <h1>Buttons</h1>
        <div>
          <p>&lt;Button /&gt;</p>
          <Button theme="full">Default</Button>
        </div>
        <div>
          <p>&lt;Button variant="outline" /&gt;</p>
          <Button theme="outline">Default</Button>
        </div>

        <div>
          <p>&lt;Button variant="text" /&gt;</p>
          <Button theme="text">Default</Button>
        </div>

        <div>
          <p>&lt;Button disableShadow /&gt;</p>
          <Button theme="disable-shadow">Default</Button>
        </div>

        <div className="flex-btn">
          <div>
            <p>&lt;Button disabled /&gt;</p>
            <Button theme="disabled">Disabled</Button>
          </div>
          <div className="disabled-div">
            <p>&lt;Button variant="text" disabled /&gt;</p>
            <Button theme="disabled-text">Disabled</Button>
          </div>
        </div>

        <div className="flex-btn">
          <div>
            <p>&lt;Button startIcon="local_grocery_store" /&gt;</p>
            <Button theme="start-icon">
              <i className="material-icons">shopping_cart</i> Default
            </Button>
          </div>
          <div className="icon-div">
            <p>&lt;Button endIcon="local_grocery_store" /&gt;</p>
            <Button theme="end-icon">
              Default <i className="material-icons">shopping_cart</i>
            </Button>
          </div>
        </div>

        <div className="flex-btn">
          <div>
            <p>&lt;Button sizeIcon="sm" /&gt;</p>
            <Button theme="size-sm">Default</Button>
          </div>

          <div className="icon-size">
            <p>&lt;Button sizeIcon="md" /&gt;</p>
            <Button theme="size-md">Default</Button>
          </div>

          <div className="icon-size-lg">
            <p>&lt;Button sizeIcon="lg" /&gt;</p>
            <Button theme="size-lg">Default</Button>
          </div>
        </div>

        <div className="flex-btn">
          <div className="button-default">
            <p>&lt;Button color="default" /&gt;</p>
            <Button theme="color-default">Default</Button>
          </div>

          <div className="button-primary">
            <p>&lt;Button color="primary" /&gt;</p>
            <Button theme="color-primary">Default</Button>
          </div>

          <div className="button-secondary">
            <p>&lt;Button color="secondary" /&gt;</p>
            <Button theme="color-secondary">Secondary</Button>
          </div>

          <div className="button-danger">
            <p>&lt;Button color="danger" /&gt;</p>
            <Button theme="color-danger">Danger</Button>
          </div>
        </div>
      </div>

      <div id="footer">
        <footer>
          <p id="footer-p">Developer: Dare Oloruntoba</p>
          <a href="#top">Back to top &raquo;</a>
        </footer>
      </div>
    </>
  );
}

export default ButtonContainer;
