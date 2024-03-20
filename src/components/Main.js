// const dishes = [
//     "Black Bean Soup",
//     "Macaroni and Cheese",
//     "Salmon and Potatoes"
// ]

function Main({ dishes }) {
    return (
        <section>
            <img
                height={200}
                src=
                "https://i.pinimg.com/564x/35/16/27/35162714557ef3a58ea38db8d2c4ef6d.jpg"
            ></img>
            <ul>
                {dishes.map((dish) => (<li key={dish.id}>{dish.title}</li>)
                )}
            </ul>
        </section>
    )
}

export default Main;