import Myimg from './lip.avif'
function  Card(){

    return(
            <section className="card">
                <div className="img1">
                <img src={Myimg} alt="" />
                </div>
                <h1>This is my fiist card</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat beatae, corrupti, a fugiat vero porro accusantium sed reiciendis sit inventore numquam et. Sint, libero molestias? Ipsum, nemo dicta. Et, nulla!</p>
                <button>Click for more details</button>
            </section>
    )
}

export default Card