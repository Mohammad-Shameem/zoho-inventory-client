import React from 'react';
import { Link } from 'react-router-dom';
import './Wellcome.css'

const Wellcome = () => {
    return (
        <div className='wellcome'>
            <h2 className='heading'>WELLCOME TO ZOHO INVENTORY</h2>
            <p > Wellcome to ZOHO INVENORY.Inventory of Camping Gears And Partner of all Outdoor <br />
                Camping Lover.Zoho stores raw materials used to produce goods as well as the goods  <br />
                that are available for sale.Zoho Inventory is Automated inventory management. <br />
                Zoho stores raw materials used to produce goods as well as the goods  <br />
                that are available for sale.Zoho Inventory is Automated inventory management. <br />
                Zoho stores raw materials used to produce goods as well as the goods  <br />
                that are available for sale.Zoho Inventory is Automated inventory management. <br />
                Zoho Inventory is Automated inventory management.
            </p>
            <Link to={"/signup"}>  <button className='button connect-btn'>Connect with us</button></Link>

        </div>
    );
};

export default Wellcome;