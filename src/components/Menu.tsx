import { Link } from "react-router-dom"

const Menu = ()=>{
    return(
        <div className="bg-gray-600 py-5 ">
            <ul className="flex flex-row justify-around items-center justify-items-center">
               <li><Link to={'/home'}>Home</Link></li>
               <li><Link to={'/promotion'}>Promoções</Link></li>
               <li><Link to={'/saleorpurchase'}>Venda/Compra</Link></li>
               <li><Link to={'/'}>Lucros/Despesas</Link></li>
            </ul>
        </div>
    )
}

export default Menu