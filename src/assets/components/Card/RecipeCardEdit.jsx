/* eslint-disable react/prop-types */


import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types, no-unused-vars
const RecipeCardEdit = ({ recipe, oneDelete }) => {

    const handleDelete = async () => {
        // await fetch(`http://localhost:3000/recipes/${recipe?.id}`, {
        //     method: 'DELETE'
        // }).then((res) => res.json())
        //     .then((data) => {
        //         oneDelete(recipe?.id)
        //         console.log(data)
        //     })

        await axios.delete(`http://localhost:3000/recipes/${recipe?.id}`, oneDelete(recipe?.id));
        toast("Add a Product..!")


    };
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
                        <Link to={`/dashboard/details/${recipe?.id}`} className="btn btn-primary text-white">Details</Link>
                        <Link to={`/dashboard/edit-recipe/${recipe?.id}`} className="btn btn-success text-white">Edit</Link>

                        <button onClick={handleDelete} className="btn btn-error text-white">Delete</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RecipeCardEdit;