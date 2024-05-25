/* eslint-disable react/prop-types */

const CatagorieCard = ({ catagories }) => {
    return (
        <div className="lg:px-5 lg:py-3 sm:px-2 sm:py-1">

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                    </div>
                    <h1 className="text-3xl text-center">{catagories?.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default CatagorieCard;