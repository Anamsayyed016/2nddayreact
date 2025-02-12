import Myimg from './lip.avif'
function  Card(){
    let name = "Anam"
    // let age = prompt("Enter the age")

        let person={
            fname : "Anam",
            lname : "Sayyed",
            age : 27
        }

            function fun(a){
                // alert("Working")
                return a+a
            }
    return(
            <>
                {/* <h1>My name is {person.fname}</h1>
                <h1>My last name  is {person.lname} and Age {person.age}</h1>
                {fun(10)} */}
            </>
    )
}

export default Card