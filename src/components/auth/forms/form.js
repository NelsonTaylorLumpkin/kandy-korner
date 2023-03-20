import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const creationForm = () => {
    const [employeeChoices, setEmployeeChoices] = useState({
        name: "",
        price: 0,
        typeId: 0
    })
    const [products, setProducts] = useState([])
    const [types, setTypes] = useState([])
    const [prices, setPrices] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:8088/products')
            .then((res) => res.json())
            .then((products) => {
                setProducts(products)
            })
        fetch('http://localhost:8088/types')
            .then((res) => res.json())
            .then((types) => {
                setTypes(types)
            })
        fetch('http://localhost:8088/price')
            .then((res) => res.json())
            .then((prices) => {
                setPrices(prices)
            })

    }, [])
    //use this use effect all the time to prevent infinite fetch!!!!!!!!!!
    const handleSaveProduct = (event) => {
        event.preventDefault()

    }
    if (
        products.name &&
        products.price &&
        products.typeId
    ) {
        fetch('http://localhost:8088/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employeeChoices),
        }).then(() => {
            fetch('http://localhost:8088/products')
                .then(() => {
                    navigate('/products')
                })
        })
    } else {
        alert('Fill the Form')
    }
}

    return (
        <form>
            <h2 className="creation-form-title">Kandy Kreator</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                    required
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="product"
                    value={products.name}
                    onChange={(event) => {
                        const copy = { ...employeeChoices }
                        copy.name = event.target.value
                        setEmployeeChoices(copy)
                    }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className=
            </fieldset>

        </form>
    )



// Product name
// Product type
// Price
// Once the POST operation is complete, 
// navigate the employee to the listing of all products.