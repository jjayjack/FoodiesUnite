const axios = require ('axios');

module.exports = {
    findAllrestaurants: function() {
      return axios.get("https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=3QBEPB1GAD1QAVE2EHTGEHJOGRVRZ0Z0XANFVEPGW03WHPCO&client_secret=0TXSLBF4KBMO5TQXO3NBUBL533A2HAP2KXIFVSUUBEEWWCU0&v=YYYYMMDD")
    },

    findRestaurants: () => 
      axios({
        'url': 'https://api.foursquare.com/v2/venues/explore',
        'method': 'GET',
        'qs': {
          'client_id': "3QBEPB1GAD1QAVE2EHTGEHJOGRVRZ0Z0XANFVEPGW03WHPCO",
          'client_secret': "0TXSLBF4KBMO5TQXO3NBUBL533A2HAP2KXIFVSUUBEEWWCU0",
          'll': '40.7243,-74.0018',
          'query': 'coffee',
          'v': '20180323',
          'limit': '1',
        },
      },
      function(err, res, body) {
        if (err) {
          console.error(err);
        } else {
          console.log(body);
        }
      }
    )
}