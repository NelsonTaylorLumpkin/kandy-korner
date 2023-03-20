import { useEffect, useState } from "react";

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationsArray) => {
                    setLocations(locationsArray)

                })
        },[]
    )
    return <>
    <h2>Locations</h2>
    <article className="locations">
        {
            locations.map(
                (location) => {
                    return <section key={location.id} className="location">
                        <header>{location.address}--{location.square_footage}sqft</header>
                    </section>
                }
            )
        }
    </article>
    </>
}


