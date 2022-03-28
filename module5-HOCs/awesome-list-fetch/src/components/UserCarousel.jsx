import { Carousel } from 'react-responsive-carousel';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// return (
//   <div key={user.email}>
//     <img src={user.picture.large} />
//     <p className="legend">{user.name}</p>
//   </div>
// )

const UserCarousel = ({ list }) => {
  console.log("this is carousel:", list);
  console.log(Array.isArray(list));
  return (
    <div className="UserCarousel">
      <Carousel centerMode={true}>
        {list.map((user) => {
          return (
            <div key={user.email}>
              <img src={user.picture.large} />
              <p className="legend">{user.name.first}</p>
            </div>
          )
        })}
      </Carousel>
    </div>
  );
}

export default UserCarousel;

// let userExample = {
//   "gender": "male",
//   "name": {
//     "title": "Mr",
//     "first": "Ruben",
//     "last": "Brun"
//   },
//   "location": {
//     "street": {
//       "number": 2180,
//       "name": "Rue Docteur-Bonhomme"
//     },
//     "city": "Tours",
//     "state": "Val-de-Marne",
//     "country": "France",
//     "postcode": 55296,
//     "coordinates": {
//       "latitude": "3.8934",
//       "longitude": "-105.6638"
//     },
//     "timezone": {
//       "offset": "+9:00",
//       "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
//     }
//   },
//   "email": "ruben.brun@example.com",
//   "login": {
//     "uuid": "d1e3cfe8-4d2f-4bdd-a741-65335290e1f6",
//     "username": "goldencat491",
//     "password": "hottie",
//     "salt": "q1k0U1Z6",
//     "md5": "52bc4f4f2652da66e390ae0192687edc",
//     "sha1": "61698111e6d5aa7eb6154b83bdad1645a80f46bc",
//     "sha256": "31b1adeb772926a27c98cebcd65657e4c3751c484f18abb6b4eeaef3412f79db"
//   },
//   "dob": {
//     "date": "1964-07-12T17:56:36.870Z",
//     "age": 58
//   },
//   "registered": {
//     "date": "2005-11-14T21:57:52.644Z",
//     "age": 17
//   },
//   "phone": "02-16-09-09-39",
//   "cell": "06-57-67-92-44",
//   "id": {
//     "name": "INSEE",
//     "value": "1NNaN03152747 74"
//   },
//   "picture": {
//     "large": "https://randomuser.me/api/portraits/men/24.jpg",
//     "medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
//     "thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
//   },
//   "nat": "FR"
// };