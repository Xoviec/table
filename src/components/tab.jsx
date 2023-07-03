import { useEffect, useState } from 'react';
import '../styles/global.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios';

export const Tab = () =>{


const [accountsData, setAccountsData] = useState()
const [accountTypesData, setAccountsTypesData] = useState()

const apiKey = '5d9f48133cbe87164d4bb12c';
const headers = {
    'x-apikey': apiKey
  };


// useEffect(()=>{
//     axios.get('http://localhost:8000/accounts' )
//     .then(response => {
//         console.log(response)
//         const accountsData = response.data;
//         setAccountsData(accountsData)
//     })
//     .catch(error => {
//         console.error(error);
//     });
// }, [])


useEffect(()=>{


    axios.get('http://localhost:8000/accounts')
    .then(response => {
        console.log(response)
        const accountsData = response.data;
        setAccountsData(accountsData)
    })
    .catch(error => {
        console.error(error);
    });


  axios.get('http://localhost:8000/accounttypes')
    .then(response => {
        const accountTypesData = response.data;
        setAccountsTypesData(accountTypesData)
    })
    .catch(error => {
        console.error(error);
    });

}, [])






    console.log(accountsData)

    console.log(accountTypesData)


    return(
        <div data-testid='tab-component'>
            
            <table>
                <thead>
                    <tr >
                        <th className='table-name'>Name</th>
                        <th className='table-cash'>Profit & Loss</th>
                        <th className='table-account-type'>Account Type</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        accountsData?.map((data)=>(
                            <tr key={data.id} data-testid='tr-fetched'>
                                <td className='table-name'>{data.name}</td>
                                <td className={`${data.profitLoss > 0 ? `color-profit` : `color-loss`} table-cash`}>{data.currency}{data.profitLoss}</td>
                                <td className='table-account-type'>{accountTypesData?.find((typeData) => typeData.id === data.accountType).title}</td>
                            </tr>
                            
                        ))
                        ||
                        Array.from({ length: 8 }, (_, i) => i + 1).map((data) => (
                            <tr key={data}>
                                <td className='table-name'><Skeleton width={180}/></td>
                                <td className={`table-cash`}><Skeleton width={50}/></td>
                                <td className='table-account-type'><Skeleton width={200}/></td>
                            </tr>
                        ))
                    }
                 
                </tbody>
            </table>
        </div>
    )
}