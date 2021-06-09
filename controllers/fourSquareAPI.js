const axios = require ('axios');

module.exports = {
  // This stuff is in the right spot
    // findAllrestaurants: function() {
    //   return axios.get("https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=3QBEPB1GAD1QAVE2EHTGEHJOGRVRZ0Z0XANFVEPGW03WHPCO&client_secret=0TXSLBF4KBMO5TQXO3NBUBL533A2HAP2KXIFVSUUBEEWWCU0&v=YYYYMMDD")
    // },

    findRestaurants: (req, res) => {
    console.log('ABOUT TO HIT AXIOS API CALLL!!!!')
      axios.get('https://api.foursquare.com/v2/venues/explore',{
        params: {
          'client_id': "3QBEPB1GAD1QAVE2EHTGEHJOGRVRZ0Z0XANFVEPGW03WHPCO",
          'client_secret': "0TXSLBF4KBMO5TQXO3NBUBL533A2HAP2KXIFVSUUBEEWWCU0",
          'll': '40.7243,-74.0018',
          'query': req.params.search,
          'v': '20180323',
         // 'limit': '1',
        },
      }
    ).then(function(data, body){
     console.log('ERR REs AND BODY',data.data.response.groups[0].items, body )
      res.json(data.data.response.groups[0].items)
    })
  }
}