import React, { useContext, useState } from 'react';
import { TransectiionContext } from '../contex/index';
import './style.css';


const Child = () => {

    const { transection , addTransection } = useContext(TransectiionContext);

    let [newDesc , setDesc] = useState('');
    let [newAmount , setAmount] = useState(0);
    let [boolean , setBoolean] = useState(true);

    const handleAddition = (ev)=> {
        ev.preventDefault();

        addTransection({
            desc : newDesc,
            amount : Number(newAmount),
        })

        ev.target.reset();
    }

    const handelDelete = (ev)=>{
        let listIndex = ev.target.id;

        transection.splice(listIndex, 1);
        setBoolean(!boolean)
    }


    const getIncome = ()=>{
        let income = 0;

        for(var i = 0 ; i < transection.length ; i++){
            if(transection[i].amount > 0 ){
                income += transection[i].amount;
            }
        }
        return income;
    } 

    const getExpence = ()=>{
        let expence = 0 ;

        for(var i = 0 ; i < transection.length ; i++){
            if(transection[i].amount < 0){
                expence += transection[i].amount;
            }
        }
        return expence;
    }

    return (
        <div>
            <div className='container'>
                <h2 className="tital">Expence Tracker </h2>

                <div className='body'>

                    <div className='balance'>
                        <h3><span>Your Balance</span><br /><span>{getIncome() + getExpence()}</span></h3>
                    </div>

                    <div className="income_expence">
                        <div className="income">
                            <h3>INCOME<br />{getIncome()}</h3>
                        </div>
                        <div className="expence">
                            <h3>Expence<br />{getExpence()}</h3>
                        </div>
                    </div>

                    <div className="history">
                        <h3 style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>History</span>
                            <span 
                                style={{ fontSize: 15, cursor: "pointer", color: "rgb(31, 124, 112)" }} 
                                onClick={()=>{setBoolean(!boolean)}} 
                                >
                                { (boolean === true)? "Select" : "Cencel"}
                            </span>
                        </h3>
                        <hr />

                        <ul className="history_list" >
                            {
                                transection.map((transObj , ind)=>{
                                    return(
                                        <li key={ind}>
                                            <span>{transObj.desc}</span>
                                            <span>{transObj.amount}</span>
                                            {
                                                (boolean !== true) ?(
                                                    <button 
                                                        id={ind} 
                                                        onClick={(ev)=>{handelDelete(ev)}}
                                                        style={{border:'1px solid red', borderRadius: "5px", color:"red" , cursor: "pointer"}}
                                                    >
                                                        Delete
                                                    </button>
                                                ) : ""
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <form className="transection_form" onSubmit={handleAddition}>
                        <h3>Add new transection</h3>
                        <hr />

                        <label>
                            Enter Description:
                            <br />
                            <input type="text" className="inputInput" onChange={(ev)=>{setDesc(ev.target.value)}} required />
                        </label>
                        <br />
                        <label>
                            Enter Amount:
                            <br />
                            <input type="number" className="inputInput" onChange={(ev)=>{setAmount(ev.target.value)}} required />
                        </label>
                        <br />
                        <input type="submit" value="SUBMIT" className="submitBtn" />
                    </form>

                </div>
            </div>

        </div>
    )

}

export default Child;
