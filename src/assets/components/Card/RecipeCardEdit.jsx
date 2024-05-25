/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types, no-unused-vars
const RecipeCardEdit = ({ recipe }) => {
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product id :{recipe?.id}</h2>
                    <h3 className="card-title">Name : {recipe?.title.slice(0, 10)}</h3>
                    <h3 className="card-title">Price: {recipe?.price}$</h3>
                    <p>{recipe?.description?.slice(0, 60)}</p>
                    <div className="card-actions justify-end pt-4 mb-0 pb-0">
                        <button className="btn btn-primary">Details</button>
                        <button className="btn btn-success text-white">Edit</button>
                        <button className="btn btn-error text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCardEdit;