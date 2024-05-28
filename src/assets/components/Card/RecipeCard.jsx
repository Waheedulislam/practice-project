/* eslint-disable react/prop-types */



const RecipeCard = ({ recipe }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-3">
            <figure><img className='h-60 w-full' src={recipe?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {recipe?.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{recipe?.description?.length > 50 ? recipe?.description?.slice(0, 50) : recipe?.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline text-xl text-center border-1 p-3">{recipe.category}</div>
                </div>
            </div>
        </div>
    )
};

export default RecipeCard;