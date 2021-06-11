const axios = require('axios');
const restaurantStore = require('../models/Restaurant');
module.exports = {
  // This stuff is in the right spot
  findRestaurants: (req, res) => {
    //Axios call to grab restaurant data
    axios.get('https://api.foursquare.com/v2/venues/explore', {
      params: {
        'client_id': "3QBEPB1GAD1QAVE2EHTGEHJOGRVRZ0Z0XANFVEPGW03WHPCO",
        'client_secret': "0TXSLBF4KBMO5TQXO3NBUBL533A2HAP2KXIFVSUUBEEWWCU0",
        'near': 'Chicago, IL',
        'query': req.params.search,
        'v': '20180323',
        // 'limit': '1',
      }
    })
      .then(async function (data, body) {
        const allRestaurantResults = data.data.response.groups[0].items;
        //individual IDs for each venue
        const carouselIdForFirstItem = allRestaurantResults[0].venue.id
        const carouselIdForSecondItem = allRestaurantResults[1].venue.id
        const carouselIdForThirdItem = allRestaurantResults[2].venue.id
        // function for photos
        const restDets = async (i) => {
          const venueName = allRestaurantResults[i].venue.name
          const venueId = allRestaurantResults[i].venue.id

          const getPhoto = await axios.get('https://api.foursquare.com/v2/venues/' + venueId + '/photos', {
            params: {
              'client_id': '3QBEPB1GAD1QAVE2EHTGEHJOGRVRZ0Z0XANFVEPGW03WHPCO',
              'client_secret': '0TXSLBF4KBMO5TQXO3NBUBL533A2HAP2KXIFVSUUBEEWWCU0',
              'limit': '1',
              'v': '20180323',
            }
          })

          const photoURL = getPhoto.data.response.photos.items[0].prefix + '300x300' + getPhoto.data.response.photos.items[0].suffix

          let restaurant = {
            restaurant_id: venueId,
            restaurant_name: venueName,
            img: photoURL
          }
          //sets up the photo found from api call to be photoURL for object
          allRestaurantResults[i].venue.photo = photoURL

          // save to database!
          var newRestaurantSave = new restaurantStore(
            restaurant);

          newRestaurantSave.save(function (err, document) {
            if (err) console.error(err);
            else console.log("Document inserted successfully!");
          });
        };
        //checking to see if stored restaurant_id matches the first item with the array; 
        let storedIDone = await restaurantStore.find({restaurant_id: carouselIdForFirstItem }).exec();
        console.log(storedIDone)

        if (storedIDone.length == 0) {
          //0 passed within restDets function
          await restDets(0)
        }
        //set carousel img to one in database
        else { allRestaurantResults[0].venue.photo = storedIDone[0].img }

        let storedIDtwo = await restaurantStore.find({restaurant_id: carouselIdForSecondItem }).exec();

        if (storedIDtwo.length == 0) {
          //1 passed within restDets function
          await restDets(1)
        }
        else { allRestaurantResults[1].venue.photo = storedIDtwo[0].img }

        let storedIDthree = await restaurantStore.find( {restaurant_id: carouselIdForThirdItem }).exec();

        if (storedIDthree.length == 0) {
          await restDets(2)
        }
        else { allRestaurantResults[2].venue.photo = storedIDthree[0].img }

        res.json(allRestaurantResults)
        console.log(allRestaurantResults)

      })
    }
}