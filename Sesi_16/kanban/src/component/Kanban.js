import React from "react";
import{
    useSelector,
    useDispatch
  } from 'react-redux';



    const Content = () =>{
        const state = useSelector ((state) => state)
        const dispatch =useDispatch()
        
        const handleChange= (e) =>{
          dispatch({
              type:"CHANGE",
              payload:e.target.value
          })
        }
        const save= (e) =>{
          e.preventDefault();
          dispatch({
              type:"BACKLOG",
              payload:state.value
          })
        }
        const takeTask=(backlog)=>{
          let newArr = state.arr.filter(item => item !== backlog)
          dispatch({
              type:"INPROGRESS",
              nArr: newArr,
              payload:backlog
          })
        }
      
        const evaluate =(progress)=>{
          let newInpro = state.inPro.filter(item => item !== progress)
          dispatch({
              type:"EVALUATION",
              nInpro: newInpro,
              payload:progress
          })
        }
      
        const doneTask =(evaluate)=>{
          let newEva = state.eva.filter(item => item !== evaluate)
          dispatch({
              type:"DONE",
              nEva: newEva,
              payload:evaluate
          })
        }

      
      
      

    return (
        <div className="App">
        <div class= "container-fluid ">  
        <h1>Kanban Board</h1>
        <hr />
        <input type="input" id="input" name="imput" placeholder="New Task" value={state.value} onChange={handleChange}/>
        <button className="button" onClick={save}>Save to Backlog</button>

        <div className="row">
            <div class="col-md-3">
                <div className="col border border-secondary " style={{paddingBlock: "10px", marginRight:"10px"}}>
                    <h5 className="p-3 mb-2 bg-secondary text-white rounded">Backlog</h5>

                    {
                    state.arr.map((backlog, index) =>
                    <>             
                    <div className="border border-secondary rounded" key={index} style={{padding: "10px", marginBottom:"10px"}}>
                        <p><b>{backlog}</b></p>
                        <button className="btn btn-secondary" onClick={() => takeTask(backlog)}>Take</button>
                    </div>
                    </>
                    )
                    }
                
                    <div className="border border-secondary rounded"  style={{padding: "10px", marginBottom:"10px"}}>
                        <p><b>Create Template</b></p>
                        <button className="btn btn-secondary" >Take</button>
                    </div>
                    <div className="border border-secondary rounded"  style={{padding: "10px", marginBottom:"10px"}}>
                        <p><b>Create Mockup</b></p>
                        <button className="btn btn-secondary" >Take</button>
                    </div>
                    <div className="border border-secondary rounded"  style={{padding: "10px", marginBottom:"10px"}}>
                        <p><b>Adjust the web header</b></p>
                        <button className="btn btn-secondary" >Take</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div className="col border border-secondary " style={{paddingBlock: "10px", marginRight:"10px"}}>
                    <h5 className="p-3 mb-2 bg-warning text-white rounded">In Progress</h5>  

                    {
                        state.inPro.map((progress, index)=>
                        <>
                        <div className="border border-warning rounded"  key={index} style={{padding: "10px",marginBottom:"10px"}}>
                            <p><b>{progress}</b></p>
                            <button className="btn btn-secondary" onClick={() => evaluate(progress)}>Evaluate</button>
                        </div>            
                        </>
                        )
                    }

                    <div className="border border-secondary rounded"  style={{padding: "10px", marginBottom:"10px"}}>
                        <p><b>Initiate Docker for the project</b></p>
                        <button className="btn btn-secondary" >Evaluate</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div className="col border border-secondary " style={{paddingBlock: "10px", marginRight:"10px"}}>
                    <h5 className="p-3 mb-2 bg-info text-white rounded">Evaluation</h5>    
                    
                    {
                    state.eva.map((evaluate, index)=>
                        <>
                        <div className="border border-info rounded" key={index} style={{padding: "10px",marginBottom:"10px"}}>
                        <p><b>{evaluate}</b></p>
                        <button className="btn btn-secondary" onClick={() => doneTask(evaluate)} >DONE</button>
                        </div>            
                        </>
                        )
                    }

                    <div className="border border-secondary rounded"  style={{padding: "10px", marginBottom:"10px"}}>
                        <p><b>Finalize the T.O.R</b></p>
                        <button className="btn btn-secondary" >Done</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div className="col border border-secondary " style={{paddingBlock: "10px", marginRight:"10px"}}>
                    <h5 className="p-3 mb-2 bg-success text-white rounded">Done</h5>   

                    {
                        state.done.map((dones, index)=>
                        <>
                        <div className="border border-success rounded" key={index} style={{padding: "10px",marginBottom:"10px"}}>
                            <p><b>{dones}</b></p>                
                        </div>            
                        </>
                        )
                    }
                
                    <div className="border border-secondary rounded"  style={{padding: "10px", marginBottom:"10px"}}>
                        <p><b>Recruit Ruby developers</b></p>
                    </div>
                    <div className="border border-secondary rounded"  style={{padding: "10px", marginBottom:"10px"}}>
                        <p><b>Recruit FE developers</b></p>
                    </div>
                    <div className="border border-secondary rounded"  style={{padding: "10px", marginBottom:"10px"}}>
                        <p><b>Recruit Project Manager</b></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Content;