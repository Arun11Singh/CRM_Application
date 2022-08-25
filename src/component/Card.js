function Card ({color,count}){
    return(

        <div className="col-xs-12 col-lg-3 col-md-6 my-1">
        <div className={`card  cardItem shadow  bg-${color} text-dark bg-opacity-25 borders-b`} style={{ width: 15 + 'rem' }}>
            <div className="card-body">
                <h5 className="card-subtitle mb-2"><i className="bi bi-pencil text-primary mx-2"></i>Open </h5>
                <hr />
                <div className="row">
                    <div className="col">  
                        <h1 className="col text-dark mx-4">{ticketStatusCount.pending}</h1> 
                    </div>
                    <div className="col">
                        <div style={{ width: 40, height: 40 }}>
                            <CircularProgressbar value={ticketStatusCount.pending} styles={buildStyles({
                                    textColor: "red",
                                    pathColor: "darkblue",
                                })} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
    )
}