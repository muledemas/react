import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import React from "react";
//import classes from './Burger.css';
import styles from './burger.module.css';

const Burger = (props)=>{
    const transformedIngredient = Object.keys(props.ingredients).map(ingKey=>{
        return [...Array(props.ingredients[ingKey])].map((_,i)=>{
            return <BurgerIngredient key={ingKey + i} type={ingKey}/>
        })
    })
    const burgerStyle ={
    width: '100%',
    margin:' auto',
    height: '250px',
    overflow: 'scroll',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem'
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
           {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger