import { SiWindows11 } from 'react-icons/si';
import {BiSolidDownArrow} from 'react-icons/bi';
import {BiSolidRightArrow} from 'react-icons/bi';


const menuItem = [
    // {
    //     name:"Penyelesaian"
    // },
    {
        path:"/",
        name:"Referensi Tarif dan Pita Cukai",
        icon:<SiWindows11/>
    },
    {
        path:"/penyediaan",
        name:"Penyediaan Pita Cukai",
        icon:<SiWindows11/>
    },
    {
        path:"/persediaan",
        name:"Persediaan Pita Cukai",
        icon:<SiWindows11/>,
        iconClosed:<BiSolidRightArrow/>,
        iconOpened:<BiSolidDownArrow/>
    },
    {
        path:"/pemesanan",
        name:"Pemesanan Pita Cukai",
        icon:<SiWindows11/>
    },
    {
        path:"/pelunasan",
        name:"Pelunasan Cukai dengan Pembayaran",
        icon:<SiWindows11/>
    }
]

export default menuItem;