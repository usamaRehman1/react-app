import React, { useReducer, useState } from 'react';
import { TransectionReducer, initialTransection } from './reducer/index';
import './home.css';

function ExpenceTrackerReducer(){

    let [transState , transectionDispatch] = useReducer(TransectionReducer, initialTransection);
    // console.log("deleteTransection=>", transState.deleteTransection);

    let [newDesc , setDesc] = useState("");
    let [newAmount , setAmount] = useState(0);
    let [boolean , dispatch] = useState(true);
    console.log("Boolean=>", boolean)

    let [checkArray , setCheckArray] = useState([]);
    // console.log("CheckArray=>",checkArray)

    const handleAddTransection = (ev)=>{
        ev.preventDefault(); // its stop the reload app 

        if(Number(newAmount) ===  0 ){
            alert("Please Enter Correct Amount")
            return false;
        }

        transectionDispatch({
            type:"ADD TRANSECTION",
            payload:{
                desc:newDesc,
                amount: Number(newAmount),
            }
        })
        ev.target.reset(); // Its reset the form and empty the input value
    }

    const handleDeleteTransection = ()=>{
        console.log("Delete")

        for(var i = 0 ; i < checkArray.length ; i++ ){
            let ind = transState.transection.indexOf((transState.transection[checkArray[i]]))
            transState.transection.splice(ind , 1);
        }

        dispatch(!boolean);
        setCheckArray([]);
    }

    const getIncome = ()=>{
        let income = 0 ;
        for(var i = 0 ; i < transState.transection.length ; i++){
            if(transState.transection[i].amount > 0){
                income = income + transState.transection[i].amount ; 
            }
        }
        return income ; 
    }

    const getExpence = ()=>{
        let expence = 0 ;
        for(var i = 0 ; i < transState.transection.length ; i++ ){
            if(transState.transection[i].amount < 0){
                expence += transState.transection[i].amount ;
            }
        }
        return expence;
    }


    return (
        <div className='container'>
            <h2 className="tital">Expence Tracker </h2>

            <div className='body'>
            
            <div className='balance'>
                <h3><span>Your Balance</span><br /><span>{getIncome() + getExpence()}</span></h3>
            </div>
            
            <div className="income_expence">
                <div className="income">
                    <h3>INCOME<br/>{getIncome()}</h3>
                </div>
                <div className="expence">
                    <h3>Expence<br/>{getExpence()}</h3>
                </div>
            </div>

            <div className="history">
                <h3 style={{display:"flex", justifyContent:"space-between"}}>
                    <span>History</span>
                    {
                        (checkArray.length === 0) ?(
                            <span
                                onClick={()=> dispatch(!boolean)}
                                style={{fontSize:15, cursor: "pointer" , color: "rgb(31, 124, 112)" }}
                            >{(boolean === true)? "Select" : "Cancel" }</span>
                        ) : (
                            <span 
                                onClick={()=>dispatch(handleDeleteTransection())}
                                style={{fontSize:15, cursor: "pointer" , color: "rgb(245, 64, 64)" }}
                            >Delete</span>
                        )
                    }
                </h3>
                <hr />

                <ul className={(boolean === true) ? "history_list" : "history_list_select"} >
                    {
                        transState.transection.map((transObj , i)=>{
                            return(
                                <li key={i}>
                                    {
                                        (boolean !== true)?(
                                            <input type="checkBox" id={i} onClick={(ev)=>{setCheckArray([...checkArray,Number(ev.target.id)])}}/>
                                        ):(
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

            <form className="transection_form" onSubmit={handleAddTransection}>
                <h3>Add new transection</h3>
                <hr/>

                <label>
                    Enter Description:
                    <br />
                    <input type="text" className="inputInput" onChange={(ev)=>setDesc(ev.target.value)}/>
                </label>
                <br/>
                <label>
                    Enter Amount:
                    <br />
                    <input type="number" className="inputInput"  onChange={(ev)=>setAmount(ev.target.value)}/>
                </label>
                <br/>
                <input type="submit" value="SUBMIT" className="submitBtn"/>
            </form>

            </div>
        </div>
    )
}

export default ExpenceTrackerReducer;