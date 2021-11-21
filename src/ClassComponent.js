import React, { Component } from "react";

class Molly extends Component {
    handleCallFamilyToEat(event) {
      
        console.log("Hey fam! Food's ready!");
    }
    handleCallEntireFamilyToEat (event) {
        event.preventDefault();
        console.log("Entire Family Food's ready!");
    }
    handleCookEggs(event) {
        event.preventDefault();
        console.log("Molly is cooking fluffy eggs...");
    }

    handleMakeRice() {
        console.log("Molly is making some delicious jasmine rice...");
    }

    handleMixChicken() {
        console.log("Molly is mixing chicken with some yummy spicy sauce!");
    }

    render() {
        return (
            <div className="im-a-grand parent" onClick={this.handleCallEntireFamilyToEat}>
                <div className="im-a-parent" style={{padding:'100px',color:'blue'}} onClick={this.handleCallFamilyToEat}>
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
                </div>
            </div>
        );
    }

}

export default Molly;