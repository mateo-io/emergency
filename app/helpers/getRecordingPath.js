  var fs = require('fs'),
    readline = require('readline');
import moment from 'moment';


const getRecordingPath = (id, callStart, updateAudio, good) => {

    var rd = readline.createInterface({
      input: fs.createReadStream('/calldir/rutas'),
      output: process.stdout,
      console: false
    });

    rd.on('line', function(line) {
      const fileName = line.split('/').slice(-1);
      const onlyDateString = fileName.join('-').split('-').slice(0, -1).join('')
      const dateObject = moment(onlyDateString, 'YYYYMMDDHHmmss')
      //GET DIFFERENCE IN MINUTES
      const difference = (callStart - dateObject.toDate())/1000;

      //DIFFERENCE IS SECONDS
      if( Math.abs(difference) < 20 )  {
        console.log("Difference of less than 20 seconds")
        updateAudio(id, line)

        //GOOD UPDATES THE CALL
        good()
      }



    });
}

export default getRecordingPath;
