import React, { useContext, useState } from 'react';
import { TransectionContext } from '../contex/index';
import './style.css';

export const Child = () => {

    //here we get context Api
    let transection = useContext(TransectionContext);

    // destructuring of object
    let { initialTransection, checkedArr } = transection[0];
    console.log("checkedArr=>", checkedArr)

    let [desc, setDesc] = useState('')
    let [amount, setamount] = useState('')
    let [boolean, setBoolean] = useState(false);

    const addTransection = (ev) => {
        ev.preventDefault();

        let newTransection = {
            desc,
            amount: Number(amount),
        }

        setDesc('');
        setamount('');

        return (
            {
                ...transection[0],
                initialTransection: [newTransection, ...transection[0].initialTransection],
            }
        )
    }

    const handleDeleteTransection = ()=>{

        if(checkedArr.length === 0){
            alert("Please select any one list")
            return false
        }

        for( var i = 0 ; i < checkedArr.length ; i++ ){
            initialTransection.splice(checkedArr[i], 1)
        }

        //the chwecked array is empty now
        checkedArr.length = 0;
        setBoolean(!boolean)
    }

    let getIncome = () => {

        let income = 0;
        let getTransection = transection[0].initialTransection;

        for (var i = 0; i < getTransection.length; i++) {

            if (getTransection[i].amount >= 0) {
                income += getTransection[i].amount;
            }
        }

        return income;
    }

    let getExpence = () => {
        let expence = 0;
        let getTransection = transection[0].initialTransection;

        for (var i = 0; i < getTransection.length; i++) {

            if (getTransection[i].amount < 0) {
                expence += getTransection[i].amount;
            }
        }

        return expence;
    }

    const selectChecked = (ev) => {
        let id = Number(ev.target.id);
        // console.log("id=>", id)
        let flag = false ;

        for (var i = 0 ; i < initialTransection.length ; i++ ){

            for(var j = i ; j < initialTransection.length ; j++){

                if(checkedArr[j] === id){
                    //here we remove checked on even event
                    checkedArr.splice(checkedArr.indexOf(checkedArr[j]) , 1);
                    flag = !flag ;
                    break;
                }
            }
        }

        if(!flag){
            // here we push new checked element in context checkedArr 
            checkedArr.push(id)
        }

        flag = false;
    }

    return (
        <div className='container'>
            <h2 className="tital">Expence Tracker </h2>

            <div className='body'>

                <div className='balance'>
                    <h3><span>Your Balance</span><br /><span>${getIncome() + getExpence()}</span></h3>
                </div>

                <div className="income_expence">
                    <div className="income">
                        <h3>INCOME<br />${getIncome()}</h3>
                    </div>
                    <div className="expence">
                        <h3>Expence<br />${getExpence()}</h3>
                    </div>
                </div>

                <div className="history">
                    <h3 style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>History</span>
                        {/* {
                            (checkedArr.length === 0) ?( */}
                                    <span 
                                        // onClick={()=>setBoolean(handleDeleteTransection())}
                                        onClick={()=>handleDeleteTransection()}
                                        style={{fontSize:15, cursor: "pointer" , color: "rgb(245, 64, 64)" }}
                                    >delete</span>
                                <span
                                    onClick={()=> setBoolean(!boolean)}
                                    style={{fontSize:15, cursor: "pointer" , color: "rgb(31, 124, 112)" }}
                                >{(boolean !== false) ? "cancel" : "select"}</span>
                                
                            {/* ) : ( */}
                            {/* ) */}
                        {/* } */}
                    </h3>
                    <hr />


                    <ul className="history_list" >
                        {
                            initialTransection.map((transObj, i) => {
                                return (
                                    <li key={i}>
                                        {
                                            (boolean !== false) ? (
                                                <input type="checkBox" id={i} onChange={(ev) => { selectChecked(ev) }} />
                                            ) : (
                                                ""
                                            )
                                        }
                                        <span>{transObj.desc}</span>
                                        <span>{transObj.amount}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <form className="transection_form" onSubmit={(ev) => { transection[1](addTransection(ev)) }}>
                    <h3>Add new transection</h3>
                    <hr />

                    <label>
                        Enter Description:
                            <br />
                        <input type="text" className="inputInput" value={desc} onChange={(ev) => setDesc(ev.target.value)} />
                    </label>
                    <br />
                    <label>
                        Enter Amount:
                            <br />
                        <input type="number" className="inputInput" value={amount} onChange={(ev) => setamount(ev.target.value)} />
                    </label>
                    <br />
                    <input type="submit" value="SUBMIT" className="submitBtn" />
                </form>

            </div>
        </div>
    )

} 