import Fac from './Fac';
export default function Faculties(props) {
 
  return (
    <>
      
        <div className="col-4">
          <div className="card h-auto w-75">
            <img src={props.FacultyImage} className="img-fluid" alt="Responsive image"/>
            <div className="card-body">
              <h5 className="card-title">{props.FacultyName}</h5>
              <p className="card-text">{props.FacultyDesignation} </p>
              <p className="card-text">{props.FacultyEducationQualification} </p>
              <p className="card-text">{props.FacultyExperience} </p>
              <p className="card-text">{props.FacultyWorkingSince} </p>
              <button onClick={()=>{
                {props.deletedata()}
              }}>Delete</button>
            </div>
          </div>
        </div>

  


    </>
  )

}
