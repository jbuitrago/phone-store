import React, { useEffect } from 'react'
import Products from '../Products/'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { getProductsList } from '../../redux/actions/counterAction'
import Search from '../../components/Search'

const Home = () => {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.counter.products)

    useEffect(() => {
        if (!productList.length) {
            dispatch(getProductsList())
        }
    }, [])

    return (
        <div>
            <Search />
            {productList.length > 0 &&
                productList?.map((product) => {
                    return (
                        <div key={product.id}>
                            <Products productData={product} key={product.id} />
                        </div>
                    )
                })}
        </div>
    )
}

export default Home
