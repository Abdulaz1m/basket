import React from "react";
import classes from './product.module.css'

function Product ({ product, deleteProduct, increase, decrease,changeValue }) {
    const { name, totalPrice, id, count } = product;

    const priceFormatter = new Intl.NumberFormat()

    return (
        <div className={classes.backet_fspdd1}>
            <div className={classes.fspdd1_pds}>
                <div className={classes.vertical_dv}>
                    <h4 className={classes.fsp}>{name}</h4>
                    <div className={classes.fspdd1_d}>
                        <button href="" className={classes.fsp_mopt}>Приобрести позже</button>
                        <button href="" onClick={() => {deleteProduct(id)}} className={classes.fsp_mopt}>Удалить</button>
                    </div>
                </div>
            </div>
            <div className={classes.prss}>
                <h4 className={classes.prs}>{priceFormatter.format(totalPrice)} сомов</h4>
                <div className={classes.prs_cals}>
                    <button onClick={() => {decrease(id)}} className={`${classes.prs_minus} ${ classes.prs_plmn} `}>-</button>
                    <input onChange={(e) => {changeValue(id, +e.target.value)}} className={classes.prs_noun} type='number' min='1' max='100' value={count}></input>
                    <button onClick={() => {increase(id)}} className={`${classes.prs_plus} ${ classes.prs_plmn} ${classes.buttonsAdd} buttons_add`}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Product;