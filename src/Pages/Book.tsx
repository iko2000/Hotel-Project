import "./booker.css";
import { useState, useEffect } from "react";

export default function Book() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [date, setDate] = useState<any>('');
  const [date1 , setDate1] = useState<any>('');
  const [standard, setStandard] = useState<any>(1);
  const [delux, setDelux] = useState<any>(0);
  const [guest, setGuest] = useState<any>(1)
  const [total, setTotal] = useState(0);
  const [totalwithvat, setTotalwithvat] = useState(0);
  const [error, setError] = useState<any>(false);
  const dates = new Date();

  let currentDay= String(dates.getDate()).padStart(2, '0');
  
  let currentMonth = String(dates.getMonth()+1).padStart(2,"0");
  
  let currentYear = dates.getFullYear();

  let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
 
 
  useEffect(() => {
  setTotal(delux * 220 + standard * 150)
  
  }, [delux, standard])

  useEffect(() => {
    setTotalwithvat((total * 0.18) + total);
    }, [total])
    
 useEffect(() => {
  if( (Number(standard) + Number(delux) < 2  && guest > 3)) {
    setError(true);
    setGuest(1);
  }
  if( (Number(standard) + Number(delux) < 3  && guest > 6)) {
    setError(true);
    setGuest(1);
  }
  if( (Number(standard) + Number(delux) < 4  && guest > 9)) {
    setError(true);
    setGuest(1);
  }
  if( (Number(standard) + Number(delux) < 5  && guest > 12)) {
    setError(true);
    setGuest(1);
  }
  if( (Number(standard) + Number(delux) < 6  && guest > 15)) {
    alert('ERROR');
    setError(true);
    setGuest(1);
  }
 }, [guest , standard, delux])

  return (
    <div className="booking">
      <div className="box">
        <div className="header">
          <h3>BOOKING </h3>{" "}
        </div>
        <div className="name">
          <div>
            {" "}
            <label>Name</label>
          </div>
          <div>
            {" "}
            <input onChange={(e) => {
              setName(e.target.value)
            }} className="nameinput"  placeholder="First Name"/> <input onChange={(e) => {
              setSurname(e.target.value)
            }} className="nameinput"  placeholder="Last Name" />{" "}
          </div>
        </div>
        <div className="email"> 
              <div> <label>E-mail</label> </div>
              <div> <input className="emailinput" placeholder="Email" /> </div>

        </div>
        <div className="dates"> 
        <div className="checkin"><label>Check IN:</label> 
        <input type="date" id="start" name="trip-start" onChange={(e) => {
            setDate(e.target.value);
        }}
       value={date}
       min={currentDate} max="2025-01-01" />
        </div>
        <div className="checkout"> 
        <label>Check Out:</label>
        <input type="date" id="start" name="trip-start"
       value={date1}
       onChange={(e) => {
        setDate1(e.target.value)
       }}
       min={date} max="2025-01-01" />
        </div>

   
         </div>
        <div className="roomtype"> 
        <label>Please , Choose Room Type : </label>
        <div className="room">
          <div  className="standard" ><label>Standard</label> <input max={6} value={standard} onChange={(e) => {
            setStandard(e.target.value);
          }} min={0} type='number' />  </div>
          <div className="delux"><label>Delux</label>   <input max={3} value={delux} onChange={(e) => {
            setDelux(e.target.value)
          }} min={0} type='number' /></div>
         

        </div>
        </div>
        <div className="numofguests"> 
         <label>Please, Enter Number Of Guests </label>
         <input max="16" value={guest} min={1} onChange={(e) => {
          
          setError(false);
          setGuest(e.target.value)
         }} type="number" />
         <p className="guesterror">{error ? 'Error, One room is capable of taking max 3 person.' : '' } </p>
        </div>
        <div className="checkintime"> 
        <label> Please Enter Aprx. Check in time :  </label>
        <input type="time"/>
        </div>
        <div className="spec"> 
        <label>Please Type special request : </label>
        <input type='text' />
        </div>
        <div className="btnbox"> 
        <button>Go to Payment</button>
        </div>
      </div>
      <div className="bill">
        <div className="pays"> 
        <p>Name: <span>{name}</span> </p>
        <p>Surname: <span>{surname} </span> </p>
        <p className="datesp">DATES  </p>
       <p>From: </p> <span> {date}</span> 
       <p>Till: </p> <span> {date1} </span> 
        <p>Number of Guests: <span>{guest}</span></p>
        <p className="pricing">Room's Price (18% VAT will be added in Total):  <span>{total} GEL</span>  </p>
        

        </div>
        <div className="total">
          <p>TOTAL: {totalwithvat} GEL </p>
        </div>
      </div>
    </div>
  );
}
