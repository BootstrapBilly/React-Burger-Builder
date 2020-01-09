import React from "react"

import Button from "../../GeneralUI/Button/Button"
import classes from "./OrderSummary.module.css"

const OrderSummary = props => {

    const ArrayOfProps = Object.keys(props.ingredients)

    const list = ArrayOfProps.map(key => <li key={key}><span style={{ textTransform: "capitalize" }}>{key}</span> : {props.ingredients[key]}</li>)

    return (

        <React.Fragment>

            <h3>Your Order</h3>
            <p>A Big Boi Burger with the following ingredients:</p>

            <ul>

                {list}

            </ul>

            <p>Total : <strong> £ {props.price.toFixed(2)}</strong></p>

            <div className={classes.buttonContainer}>

                <Button buttonText={"CANCEL"} color={"red"} onClick={props.onClickCancel}></Button>
                <Button buttonText={"CONFIRM"} color={"green"} onClick={props.onClickConfirm}></Button>

            </div>

        </React.Fragment>
    );

}

export default OrderSummary