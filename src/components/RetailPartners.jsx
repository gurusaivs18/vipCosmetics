 
import '../css/RetailPartners.css';

import faces from '../assets/faces1.png';
// import debenhams from '../assets/debenhams2.png';
// import grandCentral from '../assets/grand-centrale3.png';
import dubaiDutyFree from '../assets/dubai-duty-free4.png';
import saudiDutyFree from '../assets/ksa-duty-free5.png';
import ovs from '../assets/ovslogo.jpg';
import hm from '../assets/h&m.png';
import watsons from '../assets/watsons.jpg';


const partners = [
  {
    name: 'FACES',
    img: faces,
  },
  // {
  //   name: 'DEBENHAMS',
  //   img: debenhams,
  // },
  // {
  //   name: 'GRAND CENTRAL',
  //   img: grandCentral,
  // },
  {
    name: 'Dubai Duty Free',
    img: dubaiDutyFree,
  },
  {
    name: 'Saudi Duty Free',
    img: saudiDutyFree,
  },
    {
    name: 'OVS',
    img: ovs,
  },
    {
    name: 'h&m',
    img: hm,
  },
    {
    name: 'Watsons',
    img: watsons,
  },
];

function RetailPartners() {
  return (
    <section className="retail-partners">
      <div className="container">
        <h2 className="section-heading">Retail Partners</h2>

        <div className="partners-row">
          {partners.map((partner) => (
            <div className="partner-logo" key={partner.name}>
              <img src={partner.img} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RetailPartners;
 
